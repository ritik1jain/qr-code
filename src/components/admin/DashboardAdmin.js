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
import AllHr from './AllHr';
import AddHr from './AddHr';
 
const DashboardAdmin = props => {
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
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            HR's
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <AllHr />} />
                <Route path="/home" component={props => <AllHr />} />
                <Route path="/devices" component={props => <AddHr />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>

    )
}

DashboardAdmin.propTypes = {

}

export default DashboardAdmin

