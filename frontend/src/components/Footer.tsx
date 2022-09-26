import { Container, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-3 ml-3">Copyright &copy;</Col>
      </Row>
    </Container>
  )
}

export default Footer
