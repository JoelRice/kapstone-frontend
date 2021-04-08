import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { LOGIN, useStore } from "../store/store";
import { loginRequest } from "../fetchRequests";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const [navigate, setNavigate] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password)
      .then((userData) => {
        if (userData.statusCode === 200) {
          dispatch({ type: LOGIN, payload: userData });
        } else {
          alert(`Error code: ${userData.statusCode} \r\n ${userData.message}`);
          throw new Error(`${userData.message}`);
        }
      })
      .then(() => setNavigate(true))
      .catch((error) => console.log(error.message));
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };
  if (navigate) {
    return <Redirect to="/home" push />;
  }

  return <div className="Login-page"></div>;
}

export default Login;
