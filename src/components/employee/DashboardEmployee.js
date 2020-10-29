import React from 'react';
import PropTypes from 'prop-types';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
  } from "react-router-dom";
import Card from './Card';
import Profile from './Profile';
  
const DashboardEmployee = props => {
    return (
        <Router>
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
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <Profile />} />
                <Route path="/home" component={props => <Profile />} />
                <Route path="/devices" component={props => <Card />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>

    )
}

DashboardEmployee.propTypes = {

}

export default DashboardEmployee

