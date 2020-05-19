import React from 'react';
import classes from './index.module.css';
import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from '../../components/FinishedQuiz';

class Quiz extends React.Component {
    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'What color is the sky?',
                rightAnswerId: 2,
                answers: [
                    {id: 1, text: 'Black'},
                    {id: 2, text: 'Blue'},
                    {id: 3, text: 'Red'},
                    {id: 4, text: 'Green'},
                ]
            },
            {
                id: 2,
                question: 'In what year was Saint Petersburg founded',
                rightAnswerId: 3,
                answers: [
                    {id: 1, text: '1700'},
                    {id: 2, text: '1702'},
                    {id: 3, text: '1703'},
                    {id: 4, text: '1803'},
                ]
            }
        ],
    }

    isQuizFinished = () => {
        const {activeQuestion, quiz} = this.state;
        return activeQuestion + 1 === quiz.length
    }

    onAnswerClickHandler = (answerId) => {
        const {activeQuestion, quiz, answerState} = this.state;
        const question = quiz[activeQuestion];

        if (answerState) {
            const key = Object.keys(answerState)[0];
            if (answerState[key] === 'success') {
                return
            }
        }

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: activeQuestion + 1,
                        answerState: null,
                    })
                }
                clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }


    }

    render() {
        const {quiz, activeQuestion, answerState, isFinished} = this.state;
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the question</h1>
                    {
                        isFinished ?
                            <FinishedQuiz />
                            :
                            <ActiveQuiz
                                answers={quiz[activeQuestion].answers}
                                question={quiz[activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={quiz.length}
                                answerNumber={activeQuestion + 1}
                                state={answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;
