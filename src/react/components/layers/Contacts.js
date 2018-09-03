import React, { Component } from 'react';

export default class Contacts extends Component {
    render () {
        const { openContacts, sendMsg } = this.props;
        return (
            <div className="contacts" id="cnt" onClick={()=>{
                    openContacts()
            }}>
                <div className="cnt-content" onClick={(e)=>{
                    e.stopPropagation();
                    // alert('ok');
                }}>
                    <div className="info">
                        <div className="contact">
                            <ul>
                                <li><i className='icon-phone'/><a href="tel:+79202007987"  rel="noopener noreferrer"> +7 920 200 79 87</a></li>
                                <li><i className='icon-location-outline'/> <a href="https://goo.gl/maps/PMuiyUkydbm" target="_blank" rel="noopener noreferrer">РФ, обл. Белгородская, с. Репное, ул. Березовая 13-A    </a></li>
                                <li><i className={`icon-mail`}/> <a href="mailto:Vitruknatala75@gmail.com" rel="noopener noreferrer"> VitrukNatala75@gmail.com</a></li>
                                <li><i className='icon-clock-alt'/> Работаем с 10:00 до 19:00</li>

                            </ul>
                        </div>
                        {/*<div className="socials">*/}
                            {/*<ul>*/}
                                {/*<li><i className='icon-instagram'/></li>*/}
                                {/*<li><i className='icon-facebook-squared'/></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    </div>
                    <div className="form">
                        <h2>Оставьте нам свое сообщение и мы обязательно его прочитаем</h2>
                        <input type="text" id="name" ref={`name`} placeholder="Имя*"/>
                        <input type="email" id="email" ref={`email`} placeholder="E-Mail*"/>
                        <input type="tel" id="tel" ref={ `tel` } placeholder="Телефон"/>
                        <textarea name="msg" id="msg" ref='msg' placeholder="Сообщение"/>
                        <div className="btn-send" onClick={()=>{

                            const { name, email, tel, msg } = this.refs;
                            const errors = {
                                nameErr: false,
                                emailErr: false,
                                telErr: false,
                                msgErr: false
                            };

                            //validation
                            if(name.value.length < 2)errors.nameErr = true;
                            if(email.value.length < 6) errors.emailErr = true;
                            if(tel.value.length < 8)  errors.telErr = true;
                            if(msg.value.length < 5) errors.msgErr = true;


                            let alertWindow = false;
                            let msgOfError = 'У вас не заполненны следующие поля: ';
                            for( let key in errors){
                                if(errors[key] === true){
                                    switch (`${key}`) {
                                        case 'nameErr':
                                            msgOfError = msgOfError + 'Имя; ';
                                            break;
                                        case 'emailErr':
                                            msgOfError = msgOfError + 'E-mail; ';

                                            break;
                                        case 'telErr':
                                            msgOfError = msgOfError + 'Телефон; ';

                                            break;
                                        case 'msgErr':
                                            msgOfError = msgOfError + 'Сообщение; ';
                                            break;
                                    }
                                    alertWindow = true;
                                }
                            }

                            if(!alertWindow) {
                                sendMsg(name.value, email.value, tel.value, msg.value);
                            }else{
                                alert(msgOfError);
                            }
                        }}>Отправить</div>
                    </div>
                </div>
            </div>
        )
    }
}