import React, { useEffect } from "react";
import { Button, useScrollTrigger } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";
import { useStore } from "./store/store";
import { Route, Switch, useHistory } from "react-router-dom";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";
import DeleteAccount from "./views/delete";
import Toast from "./views/toast";
import AdoptionsPage from "./views/adopt";
import Users from "./views/users";

function App() {
  const history = useHistory();
  const token = useStore((state) => state.token);
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem("lastVisit", history.location.pathname);
    };
    if (token !== null) {
      history.push(localStorage.getItem("lastVisit"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Toast />
        <Route
          path="/"
          render={(history) => {
            return <MenuHeader {...history} />;
          }}
        />
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/delete" component={DeleteAccount} />
          <Route exact path="/adoption" component={AdoptionsPage} />
          {/* Routes for the drop down menu, still need to add components */}
          {/* <Route exact path="/profile" component={Users} /> */}
          <Route exact path="/trades" component="" />
          <Route exact path="/myinventory" component="" />
          <Route exact path="/settings" component="" />
          {/* Route to see other users profiles  */}
          <Route
            path="/profile/:username?"
            render={(history) => {
              return <Users {...history} />;
            }}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
