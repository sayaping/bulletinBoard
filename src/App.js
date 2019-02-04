import React, { Component } from 'react';
import styled from 'styled-components'
//import logo from './logo.svg';
import './App.css';
import {SubmitForm} from './components/SubmitForm';
import {Board} from './components/Board';

const MainContainer = styled.div`
  width : 620px
  margin : auto
  font-family: 'Source Sans Pro', sans-serif;
`

class App extends Component {

  state = {
    inputHl: '',
    inputTxt: '',
    inputPhone: '',
    headLineIsValid : false,
    phoneIsValid : false,
    headLineHelper : 'Не более 140 символов',
    phoneHelper : 'Cтрого 18 символов, включая пробелы, скобки, тире, например "+7 (900) 123-45-67"'
  }

  setInput1 = (inputHl) => {
    if (inputHl!=='') {
      this.setState({
        headLineIsValid : true,
        headLineHelper : 'Заполнено'
      })
    }
    else {
      this.setState({
        headLineIsValid : false,
        headLineHelper : 'Не более 140 символов'
      })
    }
    localStorage.setItem('inpKey1', inputHl)
    this.setState({
        inputHl
    })
  };

  setInput2 = (inputTxt) => {
    localStorage.setItem('inpKey2', inputTxt)
    this.setState({
        inputTxt
    })
  };

  setInput3 = (inputPhone) => {
    let regexp = /[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
    if ((regexp.test(inputPhone))&&(inputPhone.length == 18)) {
      this.setState({
        phoneIsValid : true,
        phoneHelper : 'Заполнено'
      })
    }
    else {
      this.setState({
        phoneIsValid : false,
        phoneHelper : 'Cтрого 18 символов, включая пробелы, скобки, тире, например "+7 (900) 123-45-67"'
      })
    }
    localStorage.setItem('inpKey3', inputPhone)
    this.setState({
        inputPhone
    })
  };

  post = () => {
    if ((this.state.headLineIsValid === true)&&(this.state.phoneIsValid === true)) {
      let now= new Date ();
      localStorage.setItem(now, [localStorage.getItem('inpKey1'), localStorage.getItem('inpKey2'), localStorage.getItem('inpKey3') ]);
      localStorage.removeItem("inpKey1")
      localStorage.removeItem("inpKey2")
      localStorage.removeItem("inpKey3")
      this.setState({
        inputHl : '',
        inputTxt : '',
        inputPhone : '',
        keydelete : '',
        headLineIsValid : false,
        phoneIsValid : false,
        headLineHelper : 'Не более 140 символов',
        phoneHelper : 'Cтрого 18 символов, включая пробелы, скобки, тире, например "+7 (900) 123-45-67"'
    })
  }
  }



  handleBoard = () => {
      let arr=[];
      let k;
      let c = 0;
      for (let i = 0; i < localStorage.length; i++) {
        if ((localStorage.key(i) !== 'inpKey1')&&(localStorage.key(i) !== 'inpKey2')&&(localStorage.key(i) !== 'inpKey3')) {
          c++;
        }
    }   

      for (let i = 0; i < c; i++) {
          if ((localStorage.key(i) !== 'inpKey1')&&(localStorage.key(i) !== 'inpKey2')&&(localStorage.key(i) !== 'inpKey3')) {
            k = localStorage.getItem(localStorage.key(i))||0;
            k = k.split(',');
            k.push(localStorage.key(i));
          }
          arr.push(k);
      }    
      arr.reverse();
      return arr;
  }

  rend = () => {
    this.forceUpdate();
  }

  render() {
    const {inputHl, inputTxt, inputPhone, headLineHelper, phoneHelper}=this.state;
    return (
      <MainContainer>
        <SubmitForm setInput1={this.setInput1} setInput2={this.setInput2} setInput3={this.setInput3} post= {this.post} rm = {this.rm} K={this.K} inputHl = {inputHl} headLineHelper = {headLineHelper} phoneHelper ={phoneHelper}  inputTxt = {inputTxt} inputPhone = {inputPhone} />
        <Board handleBoard = {this.handleBoard()} rend = {this.rend}/>
      </MainContainer>
    );
  }
}

export default App;
