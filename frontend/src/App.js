import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loginpage from "./Container/Loginpage";
import "./App.css";
import Navigation from "./Container/Navigation";
import Home from "./Container/Home";
import Profile from "./Container/Profile";
import Registerpage from "./Container/Registerpage";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const toggleForm = (input) => {
    setCurrentForm(input);
  };

  const handleLogin = (input) => {
    setIsLoggedIn(input);
  //console.log(input,"app.js, line:20");
  };


  const handleData = (data) =>{
    setUsername(data);
    //  console.log(data,"app.js, line:25");
  }

  const routes = [
    {
      path: "/login",
      element: (
        currentForm === "login" ? (
        <Loginpage
          onFormSwitch={toggleForm}
          auth={handleLogin}
          data={handleData}
        />
        ) : ( <Registerpage onFormSwitch={toggleForm} />)
      ),
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: isLoggedIn ? (
        <Profile auth={handleLogin} data={username} />
      ) : (
        <Loginpage
          onFormSwitch={toggleForm}
          auth={handleLogin}
          data={handleData}
        />
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" 
                onFormSwitch={isLoggedIn}/>,
    },
  ];

  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} />
      <div className="App">
        <Routes>
        {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
