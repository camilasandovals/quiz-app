import { Col, Container, Row } from "react-bootstrap";

export default function QuizCard({quizLength}) {

    return (

        <section>
            <Container>
                <Row>
                    <Col>
                    <h2>Quiz 1/{quizLength}</h2>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}