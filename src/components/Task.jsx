import "../App.css";
import "antd/dist/antd.css";
import React from "react";
import { Button } from "antd";
import { observer } from "mobx-react-lite"
import * as TYPES from "prop-types";
import store from "../store/store";

const Task = observer(({ content, start, finish, id }) => {

  const delTaskHandler = () => {
    store.deleteTask(id);
  }

  const updateTask = () => {
    store.updateTask();
  }

  return (
    <div className="task-container">
      <div className="naming">
        <span className="naming-header">{content}</span>
        <span>{start} до {finish}</span>
      </div>
      <div className="management-container">
        <Button type="link" onClick={updateTask}>Редактировать</Button>
        <Button type="link" onClick={delTaskHandler}>Удалить</Button>
      </div>
    </div>
  );
})

Task.propTypes = {
  content: TYPES.string,
  start: TYPES.string,
  finish: TYPES.string,
  id: TYPES.number,
};

Task.defaultProps = {
  content: "",
  start: "",
  finish: "",
  id: null,
};

export default Task