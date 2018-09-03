import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        const { openContacts } = this.props;
        return (
            <div className="header">
                <div className="logo">
                    <span className="logo-letter">V</span>ITRUKTRANS
                </div>
                <div className="menu">
                    <ul>
                        {/*<li><i className='icon-instagram'/></li>*/}
                        {/*<li><i className='icon-facebook-squared'/></li>*/}
                        <li onClick={()=>{
                            openContacts(true);
                        }}>Контакты</li>
                    </ul>
                </div>
            </div>
        )
    }
}