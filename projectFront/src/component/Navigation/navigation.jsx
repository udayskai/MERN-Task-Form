import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import "./nav.css";
import MyVerticallyCenteredModal from "./register";

function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <div className="main">
        <Navbar bg="" expand="lg" className="navbar">
          <Navbar.Brand
            href="#home"
            className="logo menu"
            style={{ marginTop: "25px" }}
          >
            DEMO-APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="mr-auto menu">
              <Nav.Link
                href="#home"
                className="link"
                style={{ color: "white" }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className="link"
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className="link"
              >
                JOBS
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className="link"
              >
                CLIENTS
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className="link"
              >
                EMPLOYEES
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "white" }}
                className="link"
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <h2>I am looking for...</h2> */}
        </Navbar>

        <div className="sect">
          <h2 style={{ marginBottom: "50px" }}>I am looking for...</h2>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Enter a Job Description"
              className="a ma"
              style={{ width: "500px" }}
            />

            <Button
              style={{ backgroundColor: "green" }}
              className="search-button search-buttonM"
            >
              Search
            </Button>
          </Form>
        </div>
        <div className="reg regM">
          {" "}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Button onClick={() => setModalShow(true)} style={{ margin: "50px" }}>
            Register
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navigation;
