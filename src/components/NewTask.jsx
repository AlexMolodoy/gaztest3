import React from "react";
import { Input, TimePicker } from "antd";
import { observer } from "mobx-react-lite"

import store from "../store/store"

const NewTask =  observer(() => {

  return (
    <>
      <div className="new-task-container">
        <Input onChange={(e) => store.setContent(e)} placeholder="Новая задача" />
        <TimePicker onChange={(time) => store.setState(time, "start")} placeholder="Начало" />
        <TimePicker onChange={(time) => store.setState(time, "finish")} placeholder="Конец" />
        <div className="remind-container">
          <span>Напомнить за </span>
          <TimePicker onChange={(time) => store.setState(time, "remind")} />
        </div>
      </div>
    </>
  );
})

export default NewTask;
