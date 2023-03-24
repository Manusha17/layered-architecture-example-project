import React from "react";
import useUserData from "../customHooks/useUserData";

const UserProfile = () => {
  const [userData] = useUserData("/users/1");
  return (
    <div>
      <h2>Layered Architecture Example Project</h2>
      {userData.id ? (
        <div>
          <ul> User Name: {userData.name} </ul>
          <ul> Email: {userData.email} </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UserProfile;
