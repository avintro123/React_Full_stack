import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not logged</h1>;
  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <p>More components</p>
    </div>
  );
}
