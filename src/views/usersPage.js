import UserCard from "../components/userCard";
import React, { useEffect, useState } from "react";
import { getAllUserIds } from "../apis/fetchRequests";

function UsersPage(props) {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    getAllUserIds().then((res) => {
      if (res.error) {
        console.log(res);
      } else {
        setUsersList(res);
      }
    });
  }, [setUsersList]);
  return (
    <ul>
      {usersList.map((userId) => (
        <UserCard id={userId} key={userId} />
      ))}
    </ul>
  );
}

export default UsersPage;
