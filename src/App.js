import React, { useEffect } from "react";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";
import { useStore } from "./store/store";
import { Route, Switch, useHistory } from "react-router-dom";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";
import DeleteAccount from "./views/delete";
import Toast from "./views/toast";
import AdoptionsPage from "./views/adopt"
import UsersPage from "./views/usersPage"
import ProfilePage from "./views/profilePage"
import Shop from "./views/shop";

function App() {
  const history = useHistory();
  const token = useStore((state) => state.token);
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem("lastVisit", history.location.pathname);
    };
    if (token !== null && history.location.pathname === "/") {
      history.push(localStorage.getItem("lastVisit"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Toast />
        <Route component={MenuHeader} path="/" />
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/delete" component={DeleteAccount} />
          <Route exact path="/adoption" component={AdoptionsPage} />
          <Route exact path="/shop" component={Shop} />
          <Route component={UsersPage} path="/users" />
          {/* Routes for the drop down menu, still need to add components */}
          <Route component={ProfilePage} path="/profile" />
          <Route exact path="/settings" component="" />
          {/* Route to see other my profile  */}
          
        </Switch>
      </header>
    </div>
  );
}

export default App;
