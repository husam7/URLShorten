import '../../styles/footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
 return (
  <footer>
  <div className='footer'>
      <Row>
      <Col sm={3} md={2} lg={3} xl={3}>
      <div>
        <h3>
shortly
        </h3>
      </div>
      </Col>
      <Col sm={2} md={2} lg={2} xl={2}>1 of 1</Col>
      <Col sm={2} md={2} lg={2} xl={2}>1 of 1</Col>
      <Col sm={2} md={2} lg={2} xl={2}>1 of 1</Col>
      <Col sm={2} md={2} lg={3} xl={3}>1 of 1</Col>
      </Row>
    </div>
</footer>
  );
}

export default Footer;
{/* <div className="Footer" id="MyFooter">
<a href="#home" className="active">Home</a>

<div className='FooterItems'>
<a href="#features">Features</a>
<a href="#pricing">Pricing</a>
<a href="#resources">Resources</a>
</div>
</div> */}