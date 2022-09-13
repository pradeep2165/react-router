import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handelLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
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
