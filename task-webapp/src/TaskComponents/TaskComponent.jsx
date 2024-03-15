import React, { useEffect, useState } from "react";
import { addTask, getTask, updateTask } from "./TaskService";
import { useNavigate, useParams } from "react-router-dom";

const TaskComponent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  const { id } = useParams()

  const navigator = useNavigate()

  useEffect(() => {
    if (id) {
      getTask(id)
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setStatus(response.data.status);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const saveOrUpdateTask = (e) => {
    e.preventDefault();

    const task = { title, description, status };

    if (id) {
        updateTask(id, task).then((response) => {
            console.log(response.data);
            navigator('/task-management/tasks')
        })
    } else {
      addTask(task)
        .then((response) => {
          console.log(response.data);
          navigator('/task-management/tasks')
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Update Task</h2>;
    } else {
      return <h2 className="text-center">Add Task</h2>;
    }
  };

  return (
    <div className="container">
      <br /> <br /> <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <lable className="form-lable">Task Title: </lable>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Task Name"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <lable className="form-lable">Description: </lable>
                <input
                  type="text"
                  placeholder="Enter the Task description"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Status:</label>
                <select
                  className="form-select"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">---- select status ----</option>
                  <option value="Open">Open </option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <button
                className="button button-custom"
                onClick={(e) => saveOrUpdateTask(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
