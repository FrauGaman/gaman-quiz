import React from 'react';
import classes from './index.module.css';
import AnswersList from "./AnswersList";

const ActiveQuiz = ({ answers, question, onAnswerClick, quizLength, answerNumber, state }) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{answerNumber}.</strong>&nbsp;
                    { question }
                </span>

                <small>{`${answerNumber}/${quizLength}`}</small>
            </p>
            <AnswersList answers={answers} onAnswerClick={onAnswerClick} state={state} />
        </div>
    )
}

export default ActiveQuiz;
