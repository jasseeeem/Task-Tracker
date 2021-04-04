import { MdDone } from "react-icons/md";
import { useState } from "react";

function EditTask({ task, onEdit, invertEdit, reminder }) {
  const [text, setText] = useState(task.text);
  const [day, setDay] = useState(task.day);

  const onSubmit = () => {
    invertEdit();
    onEdit(task.id, { text, day, reminder });
    setText(task.text);
    setDay(task.day);
  };
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <form className="edit-form" onSubmit={onSubmit}>
        <MdDone
          type="submit"
          value="Edit Task"
          className="tick-icon"
          onClick={() => onSubmit()}
          style={{ color: "green", cursor: "pointer" }}
        />
        <input
          className="edit-text"
          type="text"
          placeholder={task.text}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <input
          className="edit-day"
          type="text"
          placeholder={task.day}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default EditTask;
