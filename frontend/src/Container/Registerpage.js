import React, { useState, useEffect } from "react";

function Registerpage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch("http://localhost:5000/api/data")
      .then((response) =>response.json())
      .then((user) => setData(user))
      .catch((error) => setError(error.message));
  }, []);


  const handleChange = (event) =>{
    const {name , value} = event.target;
    if(name === 'name') {
      setName(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }

  }
  
/*  const handleNameChnage = (event) => {
    setName(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
*/
  const validateUser = () => {
    return data.some((user) => user.username === username);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateUser()) {
      alert("User already exists");
      return;
    }

    const user = { name, username, password };
    fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData([...data, user]);
        alert("User added");
      })
      .catch((error) => setError(error.message));
  };

 /* const displayData = (event) => {
    event.preventDefault();
    let flag = true;

    data.map((value) => {
      if (value.username === username) {
        alert("User already exist");
        flag = false;
      }
    });
    let user = { name, username, password };

    if (flag) {
      fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) =>
        response.json().then((result) => console.log(result))
      );

      data.data.push({ name, username, password });
      alert("User added");
    }
  }; */

  return (
    <div className="container">
      <h2>Registration Page: </h2>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <form className="form" onSubmit={handleSubmit}>
        <label className="pa label"> Name: </label>
        <input
          className="pa input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        ></input>
        <label className="pa label">Username: </label>
        <input
          className="pa input"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        ></input>
        <label className="pa label">Password: </label>
        <input
          className="pa input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          onChange={handleChange}
        ></input>
        <button className="pa btn" type="submit">
          Register
        </button>
        <button
          className="pa reg-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have a account Login here
        </button>
      </form>
    </div>
  );
}

export default Registerpage;
