import React from 'react';
import classes from './index.module.css';

const AnswerItem = ({ answer, onAnswerClick, state }) => {
    const cls = [classes.AnswerItem];

    if (state) {
        cls.push(classes[state])
    }

    return (
        <li className={cls.join(' ')} onClick={() => onAnswerClick(answer.id)}>
            { answer.text }
        </li>
    )
}

export default AnswerItem;
