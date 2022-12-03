import '../../styles/features.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fullyCustomizable from '../../assets/icon-fully-customizable.svg'
import brandRecognition from '../../assets/icon-brand-recognition.svg'
import detailedRecords from '../../assets/icon-detailed-records.svg'
function Features() {
  return (
    <div> <div className="Features">
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
    </div>
      <Row className='CardWrapper'>
        <Col className='Card' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <div className='IconContainer'>
            <div className='CardIcon'>
              <img src={brandRecognition}></img>
            </div>
          </div>
          <div className='CardInner'>
            <div className='CardBody'>
              <div className='Title'>
                Brand Recognition
              </div>
              <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content. </p>
            </div>
          </div>
        </Col>
        <Col className='Card' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <div className='IconContainer'>
            <div className='CardIcon'>
              <img src={detailedRecords}></img>
            </div>
          </div>
          <div className='CardInner'>
            <div className='CardBody'>
              <div className='Title'>
                Detailed Records
              </div>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p>
            </div>
          </div>
        </Col>
        <Col className='Card' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <div className='IconContainer'>
            <div className='CardIcon'>
              <img src={fullyCustomizable}></img>
            </div>
          </div>
          <div className='CardInner'>
            <div className='CardBody'>

              <div className='Title'>
                Fully Customizable
              </div>
              <p>Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Features;
