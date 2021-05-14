import { makeAutoObservable } from "mobx";
import "antd/dist/antd.css";

class store {

  newTask = {
    id: null,
    type: "success",
    content: null,
    start: null,
    finish: null,
    remind: null,
    date: null,
  }

  listData = [
    {
      id: 0,
      type: "success",
      content: "Задача",
      start: "01:11:21",
      finish: "01:11:21",
      remind: "01:11:21",
      date: 8,
    },
    {
      id: 1,
      type: "success",
      content: "Задача",
      start: "01:11:21",
      finish: "01:11:21",
      remind: "01:11:21",
      date: 8,
    },
    {
      id: 2,
      type: "success",
      content: "Задача",
      start: "01:11:21",
      finish: "01:11:21",
      remind: "01:11:21",
      date: 2,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setState(arg, field) {
    this.newTask[field] = arg.format("LT");
  }

  setContent(e) {
    this.newTask.content = e.target.value;
  }

  setDate(arg) {
    this.newTask.date = arg;
  }

  addTask() {

    const newId = this.listData.length ? this.listData[this.listData.length - 1].id + 1 : 0;

    this.newTask.id = newId;

    this.listData.push(this.newTask);

    this.newTask = {
      id: null,
      type: "success",
      content: null,
      start: null,
      finish: null,
      remind: null,
      date: null,
    }

    alert("Событие добавлено!");

  }

  updateTask() {
    alert("В разработке. Фича будет добавлена в следущем патче")
  }

  deleteTask( arg ) {
    const delIndex = this.listData.indexOf(this.listData[arg])
    this.listData.splice(delIndex, 1);
  }
}

export default new store()