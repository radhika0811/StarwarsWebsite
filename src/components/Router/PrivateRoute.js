import { Route, Redirect } from "react-router";

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = sessionStorage.getItem("user");
  return (
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
  );
}

export default PrivateRoute;
