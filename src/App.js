import React, { useEffect } from "react";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";
import { useStore } from "./store/store";
import { Route, Switch, useHistory } from "react-router-dom";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";
import DeleteAccount from "./views/delete";
import Toast from "./views/toast";
import AdoptionsPage from "./views/adopt";
import UsersPage from "./views/usersPage";
import ProfilePage from "./views/profilePage";
import InteractPage from "./views/interactPage";
import Shop from "./views/shop";
import Settings from "./views/settings";

function App() {
  const history = useHistory();
  const token = useStore((state) => state.token);
  useEffect(() => {
    window.showAdmin = () => {
      history.push("/admin");
    };
    window.onbeforeunload = (event) => {
      localStorage.setItem("lastVisit", history.location.pathname);
      window.location.pathname = "/";
    };
    if (token !== null && history.location.pathname === "/") {
      history.push(localStorage.getItem("lastVisit"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Route component={MenuHeader} path="/" />
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/delete" component={DeleteAccount} />
        <Route exact path="/adoption" component={AdoptionsPage} />
        <Route exact path="/shop" component={Shop} />
        <Route component={UsersPage} path="/users" />
        <Route component={ProfilePage} path="/profile" />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/use/:productName" component={InteractPage} />
        {/* Route to see other my profile  */}
      </Switch>
      <Toast />
    </div>
  );
}

export default App;
