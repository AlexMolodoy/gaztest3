import * as TYPES from "prop-types";

const Reminder = ({ content, start, finish}) => {

  return (
    <>
      <p>Напоминание</p>
      <span>У вас запланировано "{content}" с {start} до {finish}</span>
    </>
  );
}

Reminder.propTypes = {
  content: TYPES.string,
  start: TYPES.string,
  finish: TYPES.string,
};

Reminder.defaultProps = {
  content: "",
  start: "",
  finish: "",
};

export default Reminder;
