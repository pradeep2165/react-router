import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handelLogin = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };
  return (
    <div>
      <label htmlFor="">
        User name: <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handelLogin}>Login</button>
    </div>
  );
}

export default Login;
