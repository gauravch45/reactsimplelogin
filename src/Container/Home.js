import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="cont-home">
      <div className="wlc-home">
        <h1> Welcome</h1>
        <p>
          This is a Homepage and when you click on the login tab. You can go to
          another page where you can login or register.
        </p>
        <p>
          Try clicking on the Login tab above and use your username and password
          to login.
        </p>
        <p>
          If you don't have username and password. You can register your details
          on register page.
        </p>
      </div>
      <img
        className="img-home"
        src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
      ></img>
    </div>
  );
}

export default Home;
