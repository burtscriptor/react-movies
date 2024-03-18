import React from "react";
import { useState } from "react";

const LoginPage = ({ addUser, user }) => {
  const [newUser, setNewUser] = useState("");

  const handleUser = (event) => {
    event.preventDefault();
    addUser(newUser);
    setNewUser("");
  };

  return (
    <div className="login-page">
      Login Page
      <form onSubmit={handleUser}>
        <input
          value={newUser}
          onChange={(event) => setNewUser(event.target.value)}
          placeholder="Enter User Name"
          minLength={3}
        />
        <button type="submit">Log In</button>
      </form>
      <p>{user}</p>
    </div>
  );
};

export default LoginPage;
