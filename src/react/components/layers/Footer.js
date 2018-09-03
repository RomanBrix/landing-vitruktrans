import React, {Component} from 'react';

export default class Title extends Component {
    getAnimate(id){
        const { animateScroll } = this.props;
        let target = id;
        if(id !== 0) {
             target = document.getElementById(id).offsetTop;
        }
        // console.log('offset ',target.offsetTop);
        const position = window.pageYOffset;
        animateScroll(document.scrollingElement || document.documentElement, "scrollTop", "", position, target, 500, true)
    }
    render() {
        const {  openContacts } = this.props;
        return (
            <div className="footer">
                <div className="logo">
                    <span className="logo-letter">V</span>ITRUKTRANS
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={()=>{
                            this.getAnimate('about');
                        }}>О нас</li>
                        <li onClick={()=>{
                            this.getAnimate('HowContact');
                        }}>Как заказать</li>
                        <li onClick={()=>{
                            this.getAnimate('Export');
                        }}>Экспорт и импорт</li>
                        <li onClick={()=>{
                            this.getAnimate('throwCountry');
                        }}>Грузоперевозки</li>
                        <li onClick={()=>{
                            this.getAnimate('fromChina');
                        }}>Экспорт из Китая</li>
                        <li onClick={()=>{
                            this.getAnimate('Opt');
                        }}>Опт</li>
                        <li onClick={()=>{
                            openContacts(true);
                        }}>Контакты</li>
                    </ul>
                </div>
                <div className="copyright">
                    <div className="copyR">Copyright © 2018</div>
                    <div className="to-top" onClick={()=>{
                        this.getAnimate(0);
                    }}> <i className='icon-right-open-1'/></div>
                </div>
                <div className="more-text">
                    Мы можем доставить груз точно в потсавленное время и он будет в полной целостности и сохранности! Закажите обратный звонок или оставьте сообщение на нашем сайте и мы сможем помочь Вам!
                </div>
                {/*<div className="socials">*/}
                    {/*/!*Follow Us *!/*/}
                    {/*<ul>*/}
                        {/*<li><i className='icon-instagram'/></li>*/}
                        {/*<li><i className='icon-facebook-squared'/></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
                <div className="white-space"/>
            </div>
        )
    }
}