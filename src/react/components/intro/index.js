import React, {Component} from 'react';
import bgImg from './intro.jpg';

export default class Intro extends Component {
    getAnimate(id){
        const { animateScroll } = this.props;
        const target = document.getElementById(id);
        const position = window.pageYOffset;
        animateScroll(document.scrollingElement || document.documentElement, "scrollTop", "", position, target.offsetTop, 500, true)
    }

    render() {
        const { openContacts, fastCall } = this.props;
        return (
            <div className="intro">
                <div className="bg-layer" style={{backgroundImage: `url(${bgImg})`}}/>
                <div className="content" >
                    <div className="title">
                        <p>Ценим Ваше время также как и Ваш груз!</p>
                        <h1>Скорость и Безопасность</h1>
                    </div>

                    <div className="text">
                        <p>Мы можем доставить груз точно в потсавленное время и он будет в полной целостности и сохранности! Закажите обратный звонок или оставьте сообщение на нашем сайте и мы сможем помочь Вам!</p>
                        <div className="btn btn-call" onClick={()=>{
                            fastCall(prompt('Ваш номер телефона?'));
                        }}>Заказать звонок</div>
                    </div>
                    <div className="white-layer"/>
                </div>
                <div className="btn btn-menu" onClick={()=>{
                    // console.log(e);
                    const btnMenu = document.getElementsByClassName('btn-menu');

                    btnMenu[0].classList.toggle('btn-open');
                }}>
                    <div className="position-one">
                        <span>Меню </span>
                        <i className="icon-down"/></div>
                    <div className="btn-container">
                        <ul onClick={(e)=>{
                            e.stopPropagation();
                        }}>
                            <li onClick={()=>{this.getAnimate('about');}}>
                                <i className={`icon-right-open-1`}/>О нас
                            </li>

                            <li onClick={()=>{this.getAnimate('HowContact');}}>
                                <i className={`icon-right-open-1`}/>Как заказать
                            </li>

                            <li onClick={()=>{this.getAnimate('Export');}}>
                                <i className={`icon-right-open-1`}/>Экспорт и импорт
                            </li>

                            <li onClick={()=>{this.getAnimate('throwCountry');}}>
                                <i className={`icon-right-open-1`}/>Грузоперевозки
                            </li>
                            <li onClick={()=>{this.getAnimate('fromChina');}}>
                                <i className={`icon-right-open-1`}/>Экспорт из Китая
                            </li>
                            <li onClick={()=>{this.getAnimate('Opt');}}>
                                <i className={`icon-right-open-1`}/>Опт
                            </li>

                            <li onClick={()=>{
                                openContacts(true);
                            }}> <i className={`icon-right-open-1`}/>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}