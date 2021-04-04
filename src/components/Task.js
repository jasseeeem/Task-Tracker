import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import EditTask from "./EditTask";

function Task({ task, onDelete, onToggle, onEdit }) {
  const [editFlag, setEditFlag] = useState(true);
  const invertEdit = () => {
    setEditFlag(!editFlag);
  };
  if (editFlag) {
    return (
      <div className={`task ${task.reminder ? "reminder" : ""}`}>
        <h3>
          {task.text}
          <div>
            <FaPencilAlt
              className="pencil-icon"
              onClick={() => invertEdit(task.id)}
              style={{ color: "green", cursor: "pointer" }}
            />
            <FaTrash
              onClick={() => onDelete(task.id)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </div>
        </h3>
        <p onClick={() => onToggle(task.id)}>{task.day}</p>
      </div>
    );
  } else {
    return (<EditTask task={task} onEdit={onEdit} invertEdit={invertEdit} reminder={task.reminder} />);
  }
}

export default Task;
