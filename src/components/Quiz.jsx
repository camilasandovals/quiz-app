import QuizCard from "./QuizCard"
import QuizResult from "./QuizResult"
import { useState } from "react"

import quizData from "../data/quiz.json"
const quizLength = quizData.length

export default function Quiz() {
    const[showResult, setShowResult] = useState()

    return (
        <>
            {(showResult)
                ? (<QuizResult />)
                : (<QuizCard quizLength={quizLength}/>)
            }
        </>
    )
}