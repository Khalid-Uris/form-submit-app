import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  // console.log(props.users[0]["name"]);
  // console.log(props.users[0].age);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
