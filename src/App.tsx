import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import { NotLoggedInUser, SessionProvider } from './Context/SessionContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import TimeSheet from './Pages/TimeSheet';
import User from './Types/User';

const App: React.FC = () => {

  const [user, setUser] = useState<User>(NotLoggedInUser);

  return (
    <SessionProvider value={{user, updateUser: setUser}}>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">TimeSheet App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/timesheet">TimeSheet</Nav.Link>
            </Nav>
            <Navbar.Text>
              {user.isLoggedIn && "Logged in as " + user.userName}
                    </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/timesheet' component={TimeSheet} />
          </Switch>
          <Login />
        </div>
      </Router>
    </SessionProvider >
  );
}

export default App;
