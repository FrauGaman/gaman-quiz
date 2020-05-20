import React from 'react';
import Button from "../UI/Button";
import classes from './index.module.css';

const  FinishedQuiz = ({ quiz, results, onRetry }) => {
    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === 'success') {
            total ++;
        }
        return total;
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
           <ul>
               {
                   quiz.map((quizItem, index) => {
                       const cls = [
                           'fa',
                           results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                           classes[results[quizItem.id]],
                       ];
                       return (
                           <li key={index}>
                               <strong>{ index + 1 }</strong>.&nbsp;
                               {quizItem.question}
                               <i className={cls.join(' ')} />
                           </li>
                       )
                   })
               }
           </ul>
            <p>Right answers {successCount}/{quiz.length}</p>
            <div>
                <Button onClick={onRetry} type='primary'>Start again</Button>
                <Button onClick={Function.prototype} type='success'>Go to tests list</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
