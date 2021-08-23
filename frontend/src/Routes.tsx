import { Redirect, Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./pages/Movies/components/MovieDetails";
import PrivateRoute from "./core/components/Routes/PrivateRoute";
import { isAuthenticated } from "./core/utils/auth";
import Navbar from "./core/components/Navbar";
import history from "./core/utils/history";
import Movies from "./pages/Movies";
import Home from "./pages/Home";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return (isAuthenticated() ?
            <Redirect to='/movies' /> :
            <Home />
          )
        }}
      />
      <PrivateRoute path="/movies" exact>
        <Movies />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
)

export default Routes;