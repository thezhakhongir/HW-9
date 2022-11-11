import React, { useState } from "react";
import Card from "../UI/Card";
import DeleteModal from "../UI/DeleteModal";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isIdModal, setIsIdModal] = useState(null);

  const deleteHandler = (id) => {
    setIsDelete(true);
    setIsIdModal(id);
  };

  const confirmDeleteHandler = () => {
    const deleteUser = props.users.filter((item) => item.id !== isIdModal);
    props.setUsers(deleteUser);
    setIsDelete(false);
  };

  const rejectDeleteHandler = () => setIsDelete(false);
  return (
    <>
      {isDelete && (
        <DeleteModal
          title={isDelete.title}
          message={isDelete.message}
          onConfirm={confirmDeleteHandler}
          onReject={rejectDeleteHandler}
        />
      )}
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
              <button onClick={() => deleteHandler(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
