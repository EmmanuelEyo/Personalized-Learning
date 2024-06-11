'use client'
import React, { useState } from 'react';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(9);
  const totalQuestions = 10;
  const timeRemaining = "14:44:00";

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    alert('Quiz submitted!');
  };

  return (
    <div className='bg-slate-950 min-h-screen'>
      <div className="p-6 bg-slate-800 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span>Time remaining: {timeRemaining}</span>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="mb-4">
          <p className="font-bold">Which of the following is a popular programming language for developing multimedia webpages?</p>
        </div>
        <div className="grid gap-2 mb-4">
          {['COBOL', 'COBOL', 'COBOL', 'COBOL'].map((option, index) => (
            <button
              key={index}
              className="border p-2 rounded-md hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrev}
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Prev
          </button>
          <div className="flex items-center space-x-2">
            {[...Array(totalQuestions)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentQuestion - 1 ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
        <div className="text-center">
          <span>{score}/{totalQuestions}</span>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

