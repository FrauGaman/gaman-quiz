import React from 'react';
import classes from './index.module.css';
import ActiveQuiz from "../../components/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        quiz: [
            {
                question: 'What color is the sky?',
                rightAnswerId: 2,
                answers: [
                    { id: 1, text: 'Black' },
                    { id: 2, text: 'Blue' },
                    { id: 3, text: 'Red' },
                    { id: 4, text: 'Green' },
                ]
            }
        ],
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId);
    }

    render() {
        const { quiz } = this.state;
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the question</h1>
                    <ActiveQuiz
                        answers={quiz[0].answers}
                        question={quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;
