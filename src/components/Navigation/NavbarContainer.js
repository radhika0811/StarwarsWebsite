import {  useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  let history = useHistory();
  const isLoggedIn=sessionStorage.getItem("user");
  console.log("user->",isLoggedIn);
  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    history.push("/");
  };
  return(
      <Navbar handleSignOut={handleSignOut}  user={isLoggedIn} />
  )
};

export default NavbarContainer;