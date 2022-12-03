import '../../styles/footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconFacebook from '../../assets/Social/icon-facebook.svg'
import iconInstagram from '../../assets/Social/icon-instagram.svg'
import iconPinterest from '../../assets/Social/icon-pinterest.svg'
import iconTwitter from '../../assets/Social/icon-twitter.svg'

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <Row>
          <Col sm={3} md={2} lg={3} xl={3}>
            <div>
              <h3>
                Shortly
              </h3>
            </div>
          </Col>

          <Col sm={3} md={2} lg={2} xl={2}>

            <h4>
              Features
            </h4>
            <ul className="nav flex-column">
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </Col>

          <Col sm={3} md={2} lg={2} xl={2}>

            <h4>
              Resources
            </h4>
            <ul className="nav flex-column">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </Col>
          <Col sm={3} md={2} lg={2} xl={2}>

            <h4>
              Company
            </h4>
            <ul className="nav flex-column">
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col sm={3} md={2} lg={2} xl={2}>
          <h4>
            </h4>

            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><img src={iconFacebook} className="bi" width="24" height="24"></img></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><img src={iconTwitter} className="bi" width="24" height="24"></img></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><img src={iconPinterest} className="bi" width="24" height="24"></img></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><img src={iconInstagram} className="bi" width="24" height="24"></img></a></li>
            </ul>
          </Col>

        </Row>
      </div>

    </footer>
  );
}

export default Footer;
