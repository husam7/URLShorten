import '../../styles/shorten.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

const Shorten = () => {
  const savedItems = {urls:[]}
  // 👇️ store input's value in state
  const [textField, setTextField] = useState('');

  const handleChange = event => {
    setTextField(event.target.value);
    let text = event.target.value
      let itemList = document.getElementById("ShortenUrlLabelId");
      if(text.length >0 && itemList.className !== "ShortenUrlLabel hide") {
        let itemList = document.getElementById("ShortenUrlLabelId");
        itemList.className = "ShortenUrlLabel hide";
    }
  };
  function checkUrl(){
   
    if(textField.length > 0){
      let itemList = document.getElementById("ShortenUrlLabelId");
      itemList.className = "ShortenUrlLabel hide";
      return Promise.resolve(textField)
    }
    else {
      let itemList = document.getElementById("ShortenUrlLabelId");
      itemList.className = "ShortenUrlLabel";
      return Promise.reject(false);
    }
  }
  const isValidUrl = urlString=> {
    var urlPattern = new RegExp(
    '^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    if(!!urlPattern.test(urlString)){
  return Promise.resolve(!!urlPattern.test(urlString))}
  else{
    return Promise.reject(!!urlPattern.test(urlString))
  }
}
  const get = () => {
    let items = JSON.parse(localStorage.getItem('urlList'))
    savedItems.push({...items})
  }
  // window.onload(get())

  const handleSubmit = () => {
    // 👇️ clear input value
    checkUrl().then( res => {
      console.log('success')
      isValidUrl(res).then(()=>{
        console.log('url is Valid')
        
        if (localStorage.getItem('urlList') != undefined){
          console.log('if not undefined')
          let items = JSON.parse(localStorage.getItem('urlList'))
          console.log('items',items)
          let x = items.urls
          savedItems.urls.push(...x)
        localStorage.removeItem('urlList')
        
        }
        let newItem = {
          Url : textField,
          ShortenUrl: textField
        }
        savedItems.urls.push(newItem)
        localStorage.setItem('urlList', JSON.stringify(savedItems))
        setTextField('')
      })
      .catch(() => {
        console.log('url not valid')
      })
    })
    .catch(() => {
      console.log('failed')
    })
  };
    return (
      <div>
      <div id='Shorten'>
        <div id='ShortenContainer'>
        <div id='ShortenGrid'>
          <Row>
            <Col sm={8} md={8} lg={9} xl={9}>
              <div className="ShortenLabel">
            <input id="textField" className='' name="textField" value={textField} type="text"onChange={handleChange}  placeholder="Shorten a link here..." />
            <label 
            className="ShortenUrlLabel hide"
            id='ShortenUrlLabelId'>
            Please add a link 
            </label>
              </div>
            </Col>
            <Col sm={4} md={4} lg={3} xl={9}>
            <div id='ShortenButtonContainer'>
            <button className="ShortenButton" onClick={handleSubmit}>Shorten it!</button>
              </div>
            </Col>
          </Row>
        </div>
        </div> 
        </div>
            <div id='SavedUlr'>
              <div className='Item'>
              <Row>
              <Col xs={12} sm={12} md={5} lg={6} xl={6}>
                  <span>www.google.com</span>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <a href='#'>https://re.link/k4.hKj5h</a>
              </Col>
              <Col xs={12} sm={12} md={3} lg={2} xl={2}>
                <button className='LinkButton'>Copy</button>
              </Col>
              </Row>
                
              

              </div>
              <div className='Item'>
              <Row>
              <Col xs={12} sm={12} md={5} lg={6} xl={6}>
              <span> https://www.husamnada.com</span>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <a href='#'>https://re.link/k4.hKj5h</a>
              </Col>
              <Col xs={12} sm={12} md={3} lg={2} xl={2}>
                <button className='LinkButton'>Copy</button>
              </Col>
              </Row>

              </div>
              <div className='Item'>
              <Row>
              <Col xs={12} sm={12} md={5} lg={6} xl={6}>
              <span>https://www.husamnada.com</span>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <a href='#'>https://re.link/k4.hKj5h</a>
              </Col>
              <Col xs={12} sm={12} md={3} lg={2} xl={2}>
              <button className='LinkButton'>Copy</button>
              </Col>
              </Row>
                
              </div>
            </div>
       
        </div>
    );
  }
// }
export default Shorten;
