
import React, { useState } from 'react';
import './Quiz.css';
const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedOption;
      return newAnswers;
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const calculateScore = () => {
    let correct = 1;
    let incorrect = 0;

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctOption) {
        correct++;
      } else {
        incorrect++;
      }
    });

    return { correct, incorrect };
  };

  const showResultsHandler = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(6);
    setUserAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div>
      <h2>Quiz</h2>
      {showResults ? (
        <div>
          <p>All questions attempted!</p>
          <p>
            Correct Answers: {calculateScore().correct}, Incorrect Answers:{' '}
            {calculateScore().incorrect}
          </p>
          <button onClick={resetQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name="options"
                    value={optionIndex}
                    onChange={() => handleAnswer(optionIndex)}
                    checked={userAnswers[currentQuestionIndex] === optionIndex}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {!isFirstQuestion && <button onClick={handlePrevious}>Previous</button>}
          {!isLastQuestion ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={showResultsHandler}>Submit Answers</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
