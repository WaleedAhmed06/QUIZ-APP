import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const questions = [
        {
            question: "HTML Stands for ______",
            options: [
                "Hyper Text Markup Language",
                "High Technology Markup Language",
                "Hyperlink and Text Markup Language",
                "Hypertext Markdown Language"
            ],
            correctAnswer: "Hyper Text Markup Language"
        },
        {
            question: "CSS Stands for ______",
            options: [
                "Computer Style Sheets",
                "Creative Styling System",
                "Cascading Style Sheets",
                "Complex Styling Structures"
            ],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            question: "JS Stands for ______",
            options: [
                "Java Source",
                "JustScript",
                "JavaScript",
                "Joint Syntax"
            ],
            correctAnswer: "JavaScript"
        },
        {
            question: "RAM Stands for ______",
            options: [
                "Random Access Memory",
                "Rapid Access Memory",
                "Readily Accessed Memory",
                "Remote Allocation Memory"
            ],
            correctAnswer: "Random Access Memory"
        },
        {
            question: "SQL Stands for ______",
            options: [
                "Simple Query Language",
                "Standard Query Logic",
                "Structured Question Language",
                "Structured Query Language"
            ],
            correctAnswer: "Structured Query Language"
        },
        {
            question: "Is HTML a Programming Language?",
            options: ["YES", "NO"],
            correctAnswer: "NO",
        },
    ];

    const [indexVal, setIndexVal] = useState(0);
    const [marks, setMarks] = useState(0);
    const que = questions[indexVal];

    const renderOptions = () => {
        return que.options.map((option, i) => (
            <div key={i} className="col-md-6 my-3">
                <button
                    onClick={() => checkAnswer(que.correctAnswer, option)}
                    className="btn btn-outline-dark text-black-icon-link icon-link-hover-text-white w-100 py-2"
                >
                    {option}
                </button>
            </div>
        ));
    };

    const nextQue = () => {
        if (indexVal < questions.length - 1) {
            setIndexVal(indexVal + 1);
        }
    };

    const checkAnswer = (correctAnswer, selectedOption) => {
        console.log(correctAnswer, selectedOption);
        if (correctAnswer === selectedOption) {
            setMarks(marks + 1);
        }
        nextQue();
    };

    useEffect(() => {
        // Initial render
        renderQuestion();
    }, []);

    const renderQuestion = () => {
        return (
            <div>
                <h4 className="m-4">Question no: {indexVal + 1} / {questions.length}</h4>
                <h2 className="py-3 m-5">{que.question}</h2>
                <div className="row text-center">
                    {renderOptions()}
                </div>
                <div className="text-center">
                    {indexVal < questions.length - 1 && (
                        <button onClick={nextQue} className="btn btn-outline-primary px-5 mt-5 rounded-5">
                            Next
                        </button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="App">
            <div className="container my-5 mx-auto body">
                <h1 className="text-center -subtle p-3 rounded-main Quiz">Quiz App</h1>
                <br /><br /><br /><br />
                <div className="container-bg-warning main">
                    {renderQuestion()}
                </div>
            </div>
        </div>
    );
}

export default App;
