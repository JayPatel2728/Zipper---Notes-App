import React from "react";
import "./Header.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    if (userInfo) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Zipper</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e)=> setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          {userInfo?<Nav>
            <div className="notes">
              <Link to="/mynotes">My Notes</Link>
            </div>
            <NavDropdown title={userInfo?.name} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>: 
          <Nav>
            <Link to="/login">Login</Link>
            </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
