import React, { Component, useState, useEffect } from "react";
import Button from "./button";

const ListItem = () => {
  const [data, setData] = useState([]);
  const [list, showList] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": "apikey",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickHandler = () => {
    showList(true);
  };
  return (
    <div>
      <Button clickHandler={clickHandler} />
      <ul>
        {list &&
          data.map((list, index) => {
            return <li key={index}>{list.first_name}</li>;
          })}
      </ul>
    </div>
  );
};

export default ListItem;
