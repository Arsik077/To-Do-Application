import "./App.css";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";
import AllCards from "./Components/AllCards";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(false);
  const [message, setMessage] = useState("");
  const [newId, setNewId] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(!priority);
  };

  const handleSubmit = (event) => {
    var date = new Date();

    const inputData = { name, date, priority, description };
    addCard(inputData);
    setName("");
    setDescription("");

    event.preventDefault();
  };

  async function addCard(data) {
    const response = await fetch("http://localhost:8080/api/saveTodo", {
      method: "POST",
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
    setMessage(messData.id ? "Data Added : " : "Error");
    console.log(messData);

    setNewId(messData.id);
  }

  return (
    <div className="row">
      <div className="container" style={{ minHeight: "407px" }}>
        <div className="row">
          <center>
            <div className="card col s6 offset-s3">
              <div className="card-content">
                <form onSubmit={handleSubmit}>
                  <div className="input-field">
                    <input
                      value={name}
                      onChange={handleNameChange}
                      id="card"
                      name="cardName"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="card">Card Name</label>
                  </div>

                  <div className="input-field">
                    <input
                      value={description}
                      onChange={handleDescriptionChange}
                      id="card"
                      name="cardName"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="card">Card Name</label>
                  </div>

                  <div className="input-field row">
                    <div className="switch left">
                      <label>
                        Done
                        <input
                          checked={priority}
                          onChange={handlePriorityChange}
                          type="checkbox"
                        />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </div>
                  <div className="input-field">
                    <button className="btn">Add new</button>
                  </div>
                </form>
              </div>
            </div>
          </center>
        </div>
        <div className="row">
          <div>
            <AllCards newCardAddedId={newId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
