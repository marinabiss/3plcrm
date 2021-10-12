import React, { Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "../pages/about"
import Products from "../pages/products"
import Clients from "../pages/clients"
import Team from "../pages/team"
import Contact from "../pages/contact"
import "../App.scss"

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="Navbar" fixed="top" collapseOnSelect expand="md" variant="dark">
          <Container id="cont">
            <Navbar.Toggle id="navbar-toggler" />
            <Navbar.Collapse id="responsive">
              <Nav id="menu">
                <Nav.Link id="nav-link" href="/">
                  About
                </Nav.Link>
                <Nav.Link id="nav-link" href="/products">
                  Products and services
                </Nav.Link>
                <Nav.Link id="nav-link" href="/clients">
                  Clients
                </Nav.Link>
                <Nav.Link id="nav-link" href="/team">
                  Team
                </Nav.Link>
                <Nav.Link id="nav-link" href="/contact">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    )
  }
}
