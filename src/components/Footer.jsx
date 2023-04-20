import { Col, Container, Row } from "react-bootstrap"
import { GitHub } from 'react-bootstrap-icons'
import { ArrowRight } from "react-bootstrap-icons"

export default function Footer() {
    
    const currentYear = new Date().getFullYear()
    const gitHubLink = "https://github.com/milasandovals/quiz-app"
    
    return(
        <footer>
            <Container>
                <Col>
                    <Row>
                        <p><small>&copy; {currentYear} - Camila Sandoval</small>
                        <br/>
                        <small> <a href={gitHubLink} target="_blank" rel="noreferrer"> Code in Github</a></small>
                        </p>
                    </Row>
                </Col>
            </Container>
        </footer>
    )
}