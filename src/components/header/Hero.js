import '../../styles/hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import working from '../../assets/working.svg'

function Hero() {
  return (
    <Container className="Hero">
      <Row>
      <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7} className="HeroCol">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button>Get Started</button>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
        <img alt="Working SVG" src={working}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
