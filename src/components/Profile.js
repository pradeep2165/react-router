import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handelLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h2> Welcome {auth.user}</h2>
      <button onClick={handelLogout}>Logout</button>
    </div>
  );
}

export default Profile;
