import React, { useEffect, useState } from "react";
import Card from "./Card";

function AllCards(props) {
  const [data, setData] = useState([]);

  async function loadData() {
    let response = await fetch("http://localhost:8080/api/getAllTodo", {
      method: "GET",
      withCredentials: true,
      cache: "no-cache",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    let Data = await response.json();
    console.log(Data);
    setData(Data);
  }

  useEffect(() => {
    loadData();
  }, [props.newCardAddedId]);

  const todos = data?.map((todo) => <Card key={todo.id} todo={todo} />);

  return <div className="row">{todos}</div>;
}

export default AllCards;
