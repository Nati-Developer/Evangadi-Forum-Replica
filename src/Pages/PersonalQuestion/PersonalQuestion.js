import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import Question from "../../Question/Question";


function PersonalQuestion() {
  const [ownQuestion, setOwnQuestions] = useState([]);
  const [userData] = useContext(UserContext);
  const navigate = useNavigate();

  const Questions = async () => {
    try {
      const questionRes = await axios.get(
        `${process.env.REACT_APP_base_url}/api/questions`
      );

      const questionDataArray = Array.isArray(questionRes.data.data)
        ? questionRes.data.data
        : [questionRes.data.data];

      const filteredQuestions = questionDataArray.filter((question) => {
        return question?.user_name === userData.user?.display_name;
      });

      setOwnQuestions(filteredQuestions);
    } catch (err) {
      console.log("problem", err);
    }
  };

  useEffect(() => {
    if (!userData.user) navigate("/login");
    Questions();
  }, [userData.user, navigate]);

  return (
    <div className="container my-5 home-container">
      <h1>Select</h1>
      <h4>Welcome: {userData.user?.display_name}</h4>

      <div>
        {ownQuestion.map((question) => (
          <div key={question.post_id}>
            <hr />
            <Link
              to={`questions/${question.post_id}`}
              className="text-decoration-none text-reset"
            >
              <Question
                question={question.question}
                userName={question.user_name}
                hider={true}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalQuestion;