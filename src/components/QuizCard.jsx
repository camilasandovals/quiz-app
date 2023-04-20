import { Col, Container, Row } from "react-bootstrap";

export default function QuizCard({quizData, quizId, quizLength , handleAnswer,}) {

    return (

        <section>
            <Container className="quiz-card">
                <Row>
                    <Col>
                    <h2>Quiz {quizId+1}/{quizLength}</h2>
                    <h3> {quizData[quizId].question}</h3>
                    <ul>
                        {quizData[quizId].options.map(
                            (quizOption,id)=>{
                                return <li
                                key={"option"+id}
                                onClick={ () => handleAnswer(quizOption.isCorrect)}
                                >{quizOption.answer}</li>
                            }
                        )}
                    </ul>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}