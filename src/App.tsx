import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import TimeSheet from './Pages/TimeSheet';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">TimeSheet App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/timesheet">TimeSheet</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/timesheet' component={TimeSheet} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
