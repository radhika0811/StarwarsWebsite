import { Route, Redirect } from "react-router";
import NavbarContainer from "../Navigation/NavbarContainer";

function OpenRoute({ children, ...rest }) {

  return (
    <>
      <NavbarContainer />
      <Route
        {...rest}
        render={({ location }) => {
          console.log("location is ->", location);
          return children
        }}
      />
    </>
  );
}

export default OpenRoute;
