import React from 'react';
import PropTypes from 'prop-types';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import AllEmployees from './AllEmployees';
import AddEmployee from './AddEmployee';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
  } from "react-router-dom";
  
const DashboardHr = props => {
    return (
        <Router>
            <Route path="/" exact component={props => <AllEmployees />} />
                
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            All Employees
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Add Employee
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <AllEmployees />} />
                <Route path="/home" component={props => <AllEmployees />} />
                <Route path="/devices" component={props => <AddEmployee />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>

    )
}

DashboardHr.propTypes = {

}

export default DashboardHr

// import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import {MDBSideNav, MDBSideNavCat, MDBSideNavNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn} from "mdbreact";

// class DashboardHr extends Component {
//  state = {
//      sideNavLeft: false
//  }

//  sidenavToggle = sidenavId => () => {
//      const sidenavNr = `sideNav${sidenavId}`
//      this.setState({
//          [sidenavNr]: !this.state[sidenavNr]

//      });
//  };

//  render() {
//      return (
//          <Router>
//              <MDBContainer>
//                  <MDBBtn onClick={this.sidenavToggle("Left")}>
//                      <MDBIcon size="lg" icon="bars" />
//                  </MDBBtn>
//                  <MDBSideNav slim fixed responsive mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
//                  className="sn-bg-1">
//                      <li>
//                          <div className="logo-wrapper sn-ad-avatar-wrapper">
//                              <a href="#">
//                                  {/* <img alt="" src="" className="rounded-circle" /> */}
//                                  <span>FLookup Advisors</span>
//                              </a>
//                          </div>
//                      </li>
//                      <MDBSideNavNav>
//                          <MDBSideNavLink to="/" topLevel>
//                              <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing
//                         </MDBSideNavLink>
//                         <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
//                             <MDBSideNavLink>Submit listing</MDBSideNavLink>
//                             <MDBSideNavLink>Registration form</MDBSideNavLink>
//                         </MDBSideNavCat>
//                         <MDBSideNavCat name= "Instruction" id="instruction" icon="hand-pointer" href="#">
//                             <MDBSideNavLink>For Bloggers</MDBSideNavLink>
//                             <MDBSideNavLink>For authors</MDBSideNavLink>
//                         </MDBSideNavCat>
//                      </MDBSideNavNav>
//                  </MDBSideNav>
//              </MDBContainer>
//          </Router>

//      );
//  }
// }

// export default DashboardHr