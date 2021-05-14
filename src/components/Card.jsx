import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Button, Modal } from "antd";
import { observer } from "mobx-react-lite";
import * as TYPES from "prop-types";
import { useLocation } from "react-router-dom";

import Task from "./Task";
import NewTask from "./NewTask"
import store from "../store/store"

const PrivatCard =  observer(({ data }) => {

  const dateData = [];

  const [state, setstate] = useState(false)

  const location = useLocation();

  const date = Number(location.pathname.replace("/",""));

  data.map(item => {
    if ("/" + item.date ===  location.pathname) {
      dateData.push(item);
    }
    return null;
  });

  const openModal = () => {
    setstate(true);
  }

  const addTask = () => {
    store.setDate(date);
    store.addTask();
    setstate(false);
  }

  const closeModal = () => {
    setstate(false);
  }

  return (
    <div className="site-card-border-less-wrapper">
      <Card >
        <Button type="primary" onClick={openModal}>+ New account</Button>
        <Modal title="Новая Задача" visible={state} onOk={addTask} onCancel={closeModal} closable={false} >
          <NewTask />
        </Modal>

        <ul>
          {dateData.map((element, index) => (
              <li key={index} style={{listStyle:"none"}}>
                <Task
                  id={element.id}
                  content={element.content}
                  start={element.start}
                  finish={element.finish}
                />
              </li>
            )
          )}
        </ul>
      </Card>
    </div>
  );
})

PrivatCard.propTypes = {
  data: TYPES.array,
}

PrivatCard.defaultProps = {
  data: [],
}

export default PrivatCard;
