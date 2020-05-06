import React from 'react';
import classes from './index.module.css';
import AnswersList from "./AnswersList";

const ActiveQuiz = ({ answers, question, onAnswerClick }) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    { question }
                </span>

                <small>4/12</small>
            </p>
            <AnswersList answers={answers} onAnswerClick={onAnswerClick} />
        </div>
    )
}

export default ActiveQuiz;
