import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import backgroundImage from "../../Images/Evangadi-Forum-BG.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post(
        `${process.env.REACT_APP_base_url}/api/users/login`,
        {
          email: form.email,
          password: form.password,
        }
      );

      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes?.data?.token,
        user: loginRes?.data?.user,
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      // navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (userData.user) {
      navigate("/");
    }
  }, [userData.user, navigate]);

  return (
    <LoginContainer>
      <Wrap>
        <LoginStyle>
          <h2>Login to your account</h2>
          <p>
            Don't have an account?{" "}
            <Link to="/signup">Create a new account </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <EyeIcon onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </EyeIcon>
            <br />
            <div>
              <Link to="/resetpassword">Forgot password?</Link>
            </div>

            <button>Submit</button>
          </form>
        </LoginStyle>
        <DescriptionStyle>
          <small>About</small>
          <h1>Evangadi Networks Q & A</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button>How it Works</button>
        </DescriptionStyle>
      </Wrap>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  z-index: -1;

  @media (max-width: 768px) {
    background-image: url(${backgroundImage});
    padding-top: 400px;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const Wrap = styled.div`
  padding-top: 50px;
  z-index: 111;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;

  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    padding-top: 170px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
const LoginStyle = styled.div`
  padding-top: 60px;
  padding-bottom: 150px;
  text-align: center;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  margin-right: 20px;

  div {
    text-align: right;
    padding: 40px;
  }
  h2 {
    font-size: 20px;
  }
  input {
    width: 80%;
    text-align: left;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  button {
    width: 85%;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #ffffff;
    background: #516cf0;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover {
      background-color: #fe8402;
    }
  }

  a {
    cursor: pointer;
    color: #ffb953;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    width: 450px;
    margin-right: 40px;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;
const DescriptionStyle = styled.div`
  width: 500px;
  margin-left: 10px;
  font-size: 14px;
  text-align: justify;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);

  small {
    color: #fe8402;
  }

  button {
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #ffffff;
    background: #fe8402;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 730px;
    padding-top: 20px;
    width: 450px;
    margin-left: 0px;
    margin-right: 40px;
  }
`;

const EyeIcon = styled.small`
  cursor: pointer;
  position: relative;
  right: 30px;
  vertical-align: middle;
  /* top: 50%;
  transform: translateY(-50%); */
  margin-left: -12px;
  color: rgba(0, 0, 0, 0.4);
  &:hover {
    color: #ffb953;
  }
`;