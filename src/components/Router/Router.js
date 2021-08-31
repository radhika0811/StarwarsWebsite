import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import SearchContainer from "../Search/SearchContainer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { PlanetDetails, MovieDetails, VehicleDetails } from "../Details/index";
import PrivateRoute from "./PrivateRoute";
import React, { Suspense } from "react";
import OpenRoute from "./OpenRoute";
const HomeContainer = React.lazy(() => import("../Home/HomeContainer"));

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <OpenRoute>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <PrivateRoute>
            <Route path="/search/:category" component={SearchContainer} />
            <Suspense fallback={<div>Loading</div>}>
              <Route path="/home" component={HomeContainer} />
            </Suspense>
            <Route path="/planets/:id" component={PlanetDetails} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/vehicles/:id" component={VehicleDetails} />
          </PrivateRoute>
        </OpenRoute>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
