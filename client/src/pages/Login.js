import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");

  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        history.push("/")
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        onChange={(event) => setPassord(event.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
