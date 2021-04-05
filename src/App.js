import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { HashRouter, Route, Link } from "react-router-dom";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://task-tracker-react-flask.herokuapp.com/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.task);
      });
    console.log("fetched");
  }, []);

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(
      `https://task-tracker-react-flask.herokuapp.com/api/tasks/${id}`
    );
    const data = await res.json();
    return data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    await fetch(
      `https://task-tracker-react-flask.herokuapp.com/api/tasks/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(
      `https://task-tracker-react-flask.herokuapp.com/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      }
    );
    const data = await res.json();
  };

  //Edit Task
  const onEdit = async (id, task) => {
    setTasks(
      tasks.map((taskActual) =>
        taskActual.id === id
          ? { ...taskActual, text: task.text, day: task.day }
          : taskActual
      )
    );
    const taskToEdit = await fetchTask(id);
    const updTask = { ...taskToEdit, text: task.text, day: task.day };
    const res = await fetch(
      `https://task-tracker-react-flask.herokuapp.com/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      }
    );
    const data = await res.json();
  };

  //Add Task
  const addTask = async (task) => {
    setTasks([...tasks, data]);
    const res = await fetch(
      "https://task-tracker-react-flask.herokuapp.com/api/tasks/add",
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = await res.json();
    console.log(data);

    setShowAddTask(!showAddTask);
  };

  return (
<HashRouter basename='/'>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                  onEdit={onEdit}
                />
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        />
        <Route
          path="/about"
          component={About}
        />
        <Footer />
      </div>
    </HashRouter>  );
};

export default App;
