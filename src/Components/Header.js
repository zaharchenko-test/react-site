import React , { Component } from 'react'
import { Navbar , Nav , Container , Form , Button , FormControl } from 'react-bootstrap'
import logo from './logo192.png'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="alternative text" />
                        React
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="search" className="mr-sm-2" />
                            <Button variant="outline-info">search</Button>
                        </Form>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/blog" component={Blog} />
                </Switch>
            </Router>
            
            </>
        )
    }
}