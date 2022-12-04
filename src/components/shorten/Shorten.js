import '../../styles/shorten.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import axios from 'axios'

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
    console.log(textField)
    axios({
      method: 'get',
      url: 'https://api.shrtco.de/v2/shorten?url='+textField,
      responseType: 'stream'
    })
      .then(function (response) {
        
        let data = JSON.parse(response.data)
        console.log(data.result)
        console.log(data.result.full_short_link)
        let newItem = {
          Url : textField,
          ShortenUrl: data.result.full_short_link
        }
        localStorage.removeItem('urlList')
        savedItems.urls.push(newItem)
        localStorage.setItem('urlList', JSON.stringify(savedItems))
        setTextField('')
      });
  }
  const handleSubmit = () => {
    checkUrl().then( res => {
      isValidUrl(res).then(()=>{
        if (localStorage.getItem('urlList') != undefined){
          let items = JSON.parse(localStorage.getItem('urlList'))
          let x = items.urls
          savedItems.urls.push(...x)
        }
        get()
        
      })
      .catch(() => {
        console.log('url not valid')
      })
    })
    .catch(() => {
      console.log('failed')
    })
  };
  const handleCopy = (url,i) => {
    navigator.clipboard.writeText(url);
    let col = document.getElementById(i)
    col.removeChild(col.firstElementChild);
    const button = document.createElement('button')
    col.appendChild(button)
    button.className="Copied"
    const ButtonText = document.createTextNode("Copied");
    button.appendChild(ButtonText) 
  }
  const fillLocalStorageElements = () => {
    
    if (localStorage.getItem('urlList') != undefined ){
      let items = JSON.parse(localStorage.getItem('urlList'))
      let x = items.urls
      for( let i = 0; i < x.length; i++){
        let element = document.getElementById('SavedUlr')
        let div = document.createElement('div')
        let Row = document.createElement('div')
        let Col1 = document.createElement('div')
        let Col3 = document.createElement('div')
        let Col2 = document.createElement('div')       
        let span = document.createElement('span')
        let a = document.createElement('a')
        let button = document.createElement('button')
        div.className="Item"
        Row.className = "row"
        Col1.className="UrlCol col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12"
        Col2.className="ShortUrlCol col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
        Col3.className="LinkButtonCol col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12"
        a.href="#"
        a.className="ShortUrl"
        button.className="LinkButton"
        element.appendChild(div)
        div.appendChild(Row)
        Row.appendChild(Col1)
        Row.appendChild(Col2)
        Row.appendChild(Col3)
        Col1.appendChild(span)
        Col2.appendChild(a)
        Col3.appendChild(button)
        const OriginalUrl = document.createTextNode(x[i].Url);
        const ShortenUrl = document.createTextNode(x[i].ShortenUrl);
        const ButtonText = document.createTextNode("Copy");
        span.appendChild(OriginalUrl)
        a.appendChild(ShortenUrl)
        button.appendChild(ButtonText)
        Col3.id=`${i}`
        button.onclick =function () {
          handleCopy(x[i].ShortenUrl,i)
      }
      }
    }
  }
  window.addEventListener("load", fillLocalStorageElements);
    return (
      <div>
      <div id='Shorten'>
        <div id='ShortenContainer'>
        <div id='ShortenGrid'>
          <Row>
            <Col xs={12} sm={7} md={8} lg={9} xl={9} xxl={9}>
              <div className="ShortenLabel">
            <input id="textField" className='' name="textField" value={textField} type="text"onChange={handleChange}  placeholder="Shorten a link here..." />
            <label 
            className="ShortenUrlLabel hide"
            id='ShortenUrlLabelId'>
            Please add a link 
            </label>
              </div>
            </Col>
            <Col xs={12} sm={5} md={4} lg={3} xl={9} xxl={9}>
            <div id='ShortenButtonContainer'>
            <button className="ShortenButton" onClick={handleSubmit}>Shorten it!</button>
              </div>
            </Col>
          </Row>
        </div>
        </div> 
        </div>
            <div id='SavedUlr'>

            </div>
        </div>
    );
  }
export default Shorten;