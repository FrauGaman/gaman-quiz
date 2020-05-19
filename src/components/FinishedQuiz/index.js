import React from 'react';
import classes from './index.module.css';

const FinishedQuiz = (props) => {
    return (
        <div className={classes.FinishedQuiz}>
           <ul>
               <li>
                   <strong>1. </strong>
                   How are you?
                   <i className={`fa fa-times ${classes.error}`} />
               </li>
               <li>
                   <strong>2. </strong>
                   How are you?
                   <i className={`fa fa-check ${classes.success}`} />
               </li>
           </ul>
            <p>Right answers 4/12</p>
            <div>
                <button>Start again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
