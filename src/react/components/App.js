import React, { Component } from 'react';
import axios from 'axios';
import Intro from "./intro";
import Header from "./layers/Header";
import About from "./about";
import Content from "./content/Content";
import Footer from "./layers/Footer";
import Contacts from "./layers/Contacts";

import {
    all_content
} from './AllContent';

const URL = 'https://vitruktrans.ru/';



class App extends Component {

    animate(elem, style, unit, from, to, time = 500, prop) {
        if (!elem) {
            return;
        }
        const newTime = Math.abs(+from - +to);
        console.log(newTime);
            if(newTime < 500){
                time = newTime;
            }
            console.log('new time is: ', time);
        let start = new Date().getTime(),
            timer = setInterval(function () {
                let step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from))+unit;
                } else {
                    elem.style[style] = (from + step * (to - from))+unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
            elem[style] = from+unit;
        } else {
            elem.style[style] = from+unit;
        }
    }



    openContacts(toggle){
        if(toggle){
            document.body.classList.toggle('non-scroll', true);
            const cnt = document.getElementById('cnt');
            const cnt_content  = document.getElementsByClassName('cnt-content')[0];

            cnt.style.width = '100%';
            cnt.style.height = '100%';
            setTimeout(()=>{
                cnt_content.style.display = 'flex';

            },100);

            setTimeout(()=>{
                cnt_content.style.opacity = '1';
            },250)

        }else{
            const cnt = document.getElementById('cnt');
            const cnt_content  = document.getElementsByClassName('cnt-content')[0];
            cnt_content.style.opacity = '0';

            setTimeout(()=>{
                cnt_content.style.display = 'none';

            },200);
            setTimeout(()=>{
                cnt.style.width = '0%';
                cnt.style.height = '0%';
            },350);
            document.body.classList.toggle('non-scroll', false);

        }
    }



    fastCall(tel){
        axios.post(`${URL}send.php`, { type: 'type', tel })
            .then((res)=>{
                if(res.data === true){
                    alert("Мы получили Ваш номер и обязательно Вам перезвоним");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    sendMsg(name, mail, phone, msg){
        axios.post(`${URL}send.php`, { type: 'msg', name, phone, mail, msg })
            .then((res)=>{
                if(res.data === true){
                    alert("Мы получили Ваше сообщение и обязательно Вам ответим!");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }
  render() {
      const content_container = all_content.map((item, index)=>{
          return <Content content_obj={item} key={index} fastCall={ this.fastCall.bind(this) }/>
      });
    return (
      <div className="App">
          <Contacts
              openContacts={this.openContacts.bind(this)}
              sendMsg={ this.sendMsg.bind(this)}
          />
          <Header
              openContacts={this.openContacts.bind(this)}
          />
          <Intro
              openContacts={this.openContacts.bind(this)}
              animateScroll={ this.animate.bind(this) }
              fastCall={ this.fastCall.bind(this) }
          />
          <About/>
          { content_container }
          <Footer
              openContacts={this.openContacts.bind(this)}
              animateScroll={ this.animate.bind(this) }

          />

      </div>
    );
  }
}

export default App;
