import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.auth) {
      navigate("/login");
    }
  });

 /* useEffect(
    fetch("https://pokeapi.co/api/v2/pokemon/").then((response) =>
      response.json().then((user) => user)
    )
  );*/

  function logoutHandler() {
    navigate("/");
    
  }

  return (
    <div>
      <h1>This is Home page</h1>
      <h1> Hello: {props.data}</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Profile;
