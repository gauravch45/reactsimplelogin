import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loginpage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  let matchedUser = null;

  /*function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }*/

    useEffect(() => {
      const fetchUsers = async() => {
        try {
          const response = await fetch('http://localhost:5000/api/data');
          const data = await response.json();
          setUsers(data);
          //console.log(data);
        } catch (error) {
          setError(error.message);
        }
      };
      fetchUsers();
    }, []);

  

  const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
  };

  const handleSubmit =async(event) => {
    event.preventDefault();
    try{
      const isValidUser = users.some((user) => {
      if (user.username === username && user.password === password) {
        //console.log("true, line:50");
        props.data(user.name);
        return true;
      }
      //console.log("false, line:53");
      return false;
    });

    if (isValidUser) {
      setLoginStatus(true);
      //alert("Login successful!");
      props.auth(true);
      navigate("/profile");
    } else {
      setLoginStatus(false);
      alert("Invalid login. Please try again.");
    }
  } catch (error) {
    setError(error.message);
  }
    //setUsername("");
    //setPassword("");
  };

  return (
    <div className="container">
      <h2> Login Page: </h2>
      {error ? <p style={{color:"red"}}></p> :null }
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username" className="pa label">
          Username:
        </label>
        <input
          className="pa input"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="password" className="pa label">
          Password:
        </label>
        <input
          className="pa input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <button className="pa  btn" type="submit">
          Log in
        </button>
        <button
          className="pa reg-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account Register here
        </button>
      </form>
    </div>
  );
}
