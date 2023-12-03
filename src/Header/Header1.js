import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the sandwich icon

const Header = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const logout = () => {
    // set global state to undefined will logout the user
    setUserData({
      token: undefined,
      user: undefined,
    });

    //resetting localStorage
    localStorage.setItem("auth-token", "");
  };
  return (
    <Container>
      <Wrap>
        <Logo>
          <Link to={userData.user && "/"}>
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt=""
            />
          </Link>
        </Logo>
        <Content>
          <NavItems show={menuOpen}>
            <NavItem href="">Home</NavItem>
            <NavItem href="">How it Works</NavItem>
            {userData.user ? (
              <button to="/login" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/signup">
                <button to='/signup'>Sign In</button>
              </Link>
            )}
          </NavItems>
          <MobileMenuButton onClick={toggleMenu}>
            <FaBars />
          </MobileMenuButton>
        </Content>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 20px 0;
  box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.04);
  z-index: 1;
  position: sticky;
  top: 0px;
  background: white;
  overflow-x: hidden;
`;
const Logo = styled.div`
  background-size: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    img {
      width: 70%;
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-right: 20px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: #ffb953;
    }

    @media (max-width: 768px) {
      color: white;
    }
  }

  button {
    margin-left: 30px;
    padding: 10px 65px;
    border-radius: 5px;
    border: none;
    background: #516cf0;
    color: white;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      background: #fe8402;
    }

    @media (max-width: 768px) {
      margin-top: 10px;
      margin-bottom: 25px;
      padding: 10px 70px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItems = styled.div`
  @media (max-width: 768px) {
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    top: 10%;
    right: 0px;
    background: #fe8402;
    width: 100%;
  }
`;

const NavItem = styled.a`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 30px;
  }
`;

const MobileMenuButton = styled.div`
  font-size: 30px;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;