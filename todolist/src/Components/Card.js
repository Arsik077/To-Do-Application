import React from "react";

function Card(props) {
  async function deleteTask(data) {
    const response = await fetch("http://localhost:8080/api/deleteTodo", {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    let messData = await response.json();
  }

  return (
    <div className="col s6">
      <div className="card sticky-action">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {props.todo.description}
          </span>
          <p>{props.todo.description}</p>

          <div className="input-field">
            <div className="switch left">
              <label>
                Done
                <input checked={props.todo.priority} type="checkbox" />
                <span className="lever"></span>
              </label>
            </div>
          </div>
          <p>
            <p href="#">{new Date(props.todo.date).toLocaleDateString()}</p>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Description<i className="material-icons right">close</i>
          </span>
          <p>{props.todo.description}</p>
        </div>
        <div className="card-action">
          <button
            className="btn red"
            style={{ color: "white" }}
            onClick={() => deleteTask({ id: props.todo.id })}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
