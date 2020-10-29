import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
// import jwt from "jsonwebtoken";
import Login from "./components/Login.js";
// import Alert from "./components/Alert.js";
// import NotFound from "./components/NotFound.js";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import DashboardHr from "./components/hr/DashboardHr";
import DashboardEmployee from "./components/employee/DashboardEmployee";
import PrivateRoute from './PrivateRoute';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

// import history from "./history.js";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
      < Router >
      <Route
            
            path="/"
            component={Login}
          />
          <Route
            
            path="/login"
            component={Login}
          />
          <Switch>
          <PrivateRoute
            exact
            path="/admin"
            component={DashboardAdmin}
          />
          <PrivateRoute
            exact
            path="/hr"
            component={DashboardHr}
          />
          <PrivateRoute
            exact
            path="/employee"
            component={DashboardEmployee}
          />
          
        </Switch>
      </Router >
      </Provider>
    );
  }
  // handleSubmit = event => {
  //   event.preventDefault();
  //   // console.log("id", event.target[0].value);
  //   this.setState({ pass: true });
  //   this.setState({ loading: true });
  //   this.login(event.target[0].value, event.target[1].value);
  //   event.target.reset();
  // };
  // handleLogout = event => {
  //   console.log("logout");
  //   localStorage.clear();
  //   this.componentDidMount();
  // };
  // login = (id, pass) => {
    
  //   let bodyLogin = {
  //     email: id,
  //     password: pass
  //   }
  //   axios
  //     .post("http://localhost:4000/api/login", bodyLogin)
  //     .then(res => {
  //       // console.log(decodedData.Account);
  //       console.log(jwt.decode(res.data));
  //       var decodedData = jwt.decode(res.data);
  //       localStorage.setItem("token", res.data);

  //       if (
  //         (res == undefined ||
  //           res == null ||
  //           decodedData.Account == undefined ||
  //           decodedData.Account == null) &&
  //         !(
  //           decodedData.Account == 1 ||
  //           decodedData.Account == 2 ||
  //           decodedData.Account == 3
  //         )
  //       ) {
  //         this.setState({ pass: false });
  //         this.setState({ loading: false });
  //       } else {
  //         if (decodedData.Account == 1) {
            
  //           this.setState({ pass: true });
            
  //           this.setState({ loading: false });
            
  //           this.setState({ isLogin: true });
  //           localStorage.setItem("isLogin", true);

            
  //           localStorage.setItem("Account", 1);
  //           localStorage.setItem("_id", decodedData["_id"]);
  //           localStorage.setItem(
  //             "Name",
  //             decodedData["FirstName"] + " " + decodedData["LastName"]
  //           );
  //           this.componentDidMount();
  //           history.push("#/admin/role");
  //         }
  //         if (decodedData.Account == 2) {
            
  //           this.setState({ pass: true });
  //           this.setState({ loading: false });
  //           this.setState({ isLogin: true });
  //           localStorage.setItem("isLogin", true);

  //           localStorage.setItem("Account", 2);
  //           localStorage.setItem("_id", decodedData["_id"]);
  //           localStorage.setItem(
  //             "Name",
  //             decodedData["FirstName"] + " " + decodedData["LastName"]
  //           );
  //           this.componentDidMount();

  //           history.push("#/hr/employee");
  //         }
  //         if (decodedData.Account == 3) {
            
  //           this.setState({ pass: true });
  //           this.setState({ loading: false });
  //           this.setState({ isLogin: true });
  //           localStorage.setItem("isLogin", true);

  //           localStorage.setItem("Account", 3);
  //           localStorage.setItem("_id", decodedData["_id"]);
  //           localStorage.setItem(
  //             "Name",
  //             decodedData["FirstName"] + " " + decodedData["LastName"]
  //           );
  //           this.componentDidMount();

  //           history.push("#/employee/" + decodedData._id + "/personal-info");
  //         }
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ pass: false });
  //       this.setState({ loading: false });
  //     });

  // };
}

export default App;
