import React from "react";
import styled from "styled-components";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <LogoIcon>
          <img
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
            alt=""
          />
          <Icons>
            <Link to="#">
              <FacebookRoundedIcon />
            </Link>
            <Link to="#">
              <InstagramIcon />
            </Link>
            <Link to="#">
              <YouTubeIcon />
            </Link>
          </Icons>
        </LogoIcon>
        <UsefulLink>
          <h3>Useful Link</h3>
          <Link to="#">How it works</Link>
          <Link to="#">Terms of service</Link>
          <Link to="#">Privacy Policy</Link>
        </UsefulLink>
        <ContactInfo>
          <h3>Contact Info</h3>
          <li>Evangadi Networks</li>
          <li>support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ContactInfo>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: #3b455a;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  bottom: 0;
  width: 100%;
  /* position: relative; */
  overflow-x: hidden;

`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-bottom: 20px;

  }
`;
const LogoIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-bottom: 30px;
`;
const Icons = styled.div`
  display: flex;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #ffffff;
    margin-right: 15px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 50%;
    padding: 8px;
    background-color: #3b455a;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #000;
    }
  }
  
  a svg {
    font-size: 20px;
    align-items: center;
    justify-content: center;
  }
`;
const UsefulLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  h3 {
    color: #ffffff;
  }

  a {
    color: rgb(170, 170, 170);
    text-decoration: none;
    padding-bottom: 15px;
    &:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  }
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  h3 {
    color: #ffffff;
  }
  li {
    color: rgb(170, 170, 170);
    padding-bottom: 15px;
    text-decoration: none;
    list-style: none;
  }
`;