import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import axios from "axios";
// import ProfilePictureUpload from "../../ProfilePictureUpload/ProfilePictureUpload";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]); 

  useEffect(() => {
    if (!userData.user) {
      navigate("/login");
    } else {
 
      axios.get(`${process.env.REACT_APP_base_url}/api/users/question`).then((response) => {
        setQuestions(response.data.data);
      });
    }
  }, [userData.user, navigate]);

  const formatTimeDifference = (timestamp) => {
    const currentTime = new Date();

    const postedTime = new Date(timestamp);

    const timeDifference = currentTime - postedTime;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  };

  return (
    <HomeContainer>
      <HomeHeader>
        <Link to="/ask-question">
          <button>Ask Question</button>
        </Link>
        
      </HomeHeader>
      <PostQuestion>
        <h2>Questions</h2>

        {questions.map(
          (question, index) =>
            question.question && (
              <QuestionsList key={question.post_id}>
                <User>
                  <div>
                    <AccountCircleOutlinedIcon />
                    <h4>{question.user_name}</h4>
                  </div>
                </User>
                <p>{question.question}</p>
                <TimeStamp>
                  <Link
                    to={`/question?question=${encodeURIComponent(
                      question.question
                    )}&questionDescription=${encodeURIComponent(
                      question.question_description
                    )}&question_id=${question.question_id}`}
                  >
                    <p>{formatTimeDifference(question.timestamp)}</p>
                    <ChevronRightOutlinedIcon />
                  </Link>
                </TimeStamp>
              </QuestionsList>
            )
        )}
      </PostQuestion>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  height: 100%;
`;

const HomeHeader = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    padding: 10px 50px;
    background: #516cf0;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    &:hover {
      background: #fe8402;
    }
  }
`;

const PostQuestion = styled.div`
  margin: 0 auto;
  width: 750px;

  h2 {
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 20px;
    width: 750;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 400px;
  }
`;

const QuestionsList = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  svg {
    font-size: 50px;
    color: rgba(0, 0, 0, 1);
    font-weight: 900;
    padding-top: 15px;

    &:hover {
      cursor: pointer;
      color: #fe8402;
    }
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  svg {
    font-size: 70px;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeStamp = styled.div`
  padding-bottom: 50px;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 10px;
  }
`;