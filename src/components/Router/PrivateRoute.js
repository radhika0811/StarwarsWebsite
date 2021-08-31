import { Route, Redirect } from "react-router";
import NavbarContainer from "../Navigation/NavbarContainer";

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = sessionStorage.getItem("user");
  return (
    <>
    {/* <NavbarContainer /> */}
    <Route
      {...rest}
      render={({ location }) => {
        console.log("location is ->",location);
        return isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
    </>
  );
}

export default PrivateRoute;
