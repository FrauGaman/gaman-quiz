import React from 'react';
import classes from './index.module.css';
import AnswerItem from "./AnswerItem";

const AnswersList = ({ answers, onAnswerClick }) => {
    return (
        <ul className={classes.AnswersList}>
            {
                answers.map((item, index) => {
                    return (
                        <AnswerItem
                            key={index}
                            answer={item}
                            onAnswerClick={onAnswerClick}
                        />
                    )

                })
            }
        </ul>
    )
}

export default AnswersList;
