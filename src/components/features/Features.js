
import '../../styles/features.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fullyCustomizable from '../../assets/icon-fully-customizable.svg'
function Features() {
  return (
  <div> <div className="Features">
    <h2>Advanced Statistics</h2>
    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
  </div>
  <div className='CardWrapper'>
  <div className='Card'>
  <div className='CardInner'>
  <div className='bgg'>
  <div id='Brand'>
  <div className='IconContainer'>
    <Row>
      <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>

        <div className='CardIcon'>
<img src={fullyCustomizable}></img>
       </div>
      </Col>
      <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
        <div></div>
      </Col>
    </Row>
    </div>
    </div>
    <div className='Title'>
    Fully Customize1
    </div>
    </div>
    </div>
    </div>
    <div className='Card'>
  <div className='CardInner'>
  <div className='bgg'>
  <div id='Detailed'>
  <div className='IconContainer'>
    <Row>
      <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>

        <div className='CardIcon'>
<img src={fullyCustomizable}></img>
       </div>
      </Col>
      <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
        <div></div>
      </Col>
    </Row>
    </div> </div>
    <div className='Title'>
    Fully Customize2
    </div>
  </div>
  </div>
      </div>
     <div className='Card' >
    <div className='CardInner'>
    <div className='bgg'>
    <div id='Customized'>
    <div className='IconContainer'>
    <Row>
      <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>

        <div className='CardIcon'>
<img src={fullyCustomizable}></img>
       </div>
      </Col>
      <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
        <div></div>
      </Col>
    </Row>
    </div>
    </div>
    <div className='Title'>
    Fully Customize3
    </div>
    </div>
      </div>
   </div>
    </div>
</div>
  );
}

export default Features;
