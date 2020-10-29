import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
// import jwt from "jsonwebtoken";
import Login from "./components/Login.js";
import Alert from "./components/Alert.js";
// import NotFound from "./components/NotFound.js";
import DashboardAdmin from "./components/admin/DashboardAdmin.js";
import DashboardHr from "./components/hr/DashboardHr.js";
import DashboardEmployee from "./components/employee/DashboardEmployee.js";

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
      <Alert />
        <Switch>
          <Route
            exact
            path="/login"
            render={ props => 
              <Login />
              // props =>
              // this.state.data["Account"] == 1 ? (
              //   // <Dashboard />
              //   <Redirect to="/admin" />
              // ) : // <Login OnLogin={this.handleLogin}/>

              //   this.state.data["Account"] == 2 ? (
              //     // <Dashboard />
              //     <Redirect to="/hr" />
              //   ) : //
              //     this.state.data["Account"] == 3 ? (
              //       // <Dashboard />
              //       <Redirect to="/employee" />
              //     ) : (
              //         <Login
              //           onSubmit={this.handleSubmit}
              //           loading={this.state.loading}
              //           pass={this.state.pass}
              //         />
              //       )
            }
          />
          <Route
            exact
            path="/admin"
            render={ props => <DashboardAdmin />
              // props =>
              // this.state.data["Account"] == 1 ? (
              //   <DashboardAdmin
              //     data={this.state.data}
              //     onLogout={this.handleLogout}
              //   />
              // ) : (
              //     <Redirect to="/login" />
              //   )
            }
          />
          <Route
            exact
            path="/hr"
            render={ props =>
              <DashboardHr />
              // props =>
              // this.state.data["Account"] == 2 ? (
              //   <DashboardHr
              //     data={this.state.data}
              //     onLogout={this.handleLogout}
              //   />
              // ) : (
              //     <Redirect to="/login" />
              //   )
            }
          />
          <Route
            exact
            path="/employee"
            render={ props =>
              <DashboardEmployee />
              // props =>
              // this.state.data["Account"] == 3 ? (
              //   <DashboardEmployee
              //     data={this.state.data}
              //     onLogout={this.handleLogout}
              //   />
              // ) : (
              //     <Redirect to="/login" />
              //   )
            }
          />
          <Redirect to="/login" />
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
