import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { Calendar, Badge } from "antd";
import { observer } from "mobx-react-lite"

import store from "../store/store"

const StartCalendar = observer(() => {

  let history = useHistory();

  const getListData = (value) => {
    let listData = [];

    store.listData.map(item => {
      if (item.date === value.date()) {
        listData.push(item)
      }
      return null;
    });
    return listData || [];
  }

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index} style={{listStyle:"none"}}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  }

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  const onSelect = (date) => {
    history.push("/" + date.format("D"))
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      onSelect={onSelect}
    />
  );
})

export default StartCalendar;
