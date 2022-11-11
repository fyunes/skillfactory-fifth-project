import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../../context/userData";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const {userLog} = useContext(UserData);

  const auth = getAuth();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("desloggeado");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <button onClick={logOut}>Log Out</button>
      {userLog ? (<div>Estas loggeado</div>) : (<div>"no estas loggeado"</div>)}
    </>
  );
};

export default NavBar;
