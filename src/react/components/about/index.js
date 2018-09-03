import React, { Component } from 'react';
import aboutSvg from './about.svg';

export default class About extends Component {
    render () {
        return (
            <div className="about" id="about">
                <div className="content">
                    <div className="left-space">
                        <img src={aboutSvg} alt=""/>
                    </div>
                    <div className="right-space">
                        <h3>О нас</h3>
                        <h2>Наша компания занимается грузоперевозками </h2>
                        <p>как внутри Российской Федерации, так и за ее границами. Выбор транспортировки груза зависит от:</p>
                        <ul>
                            <li>срочности доставки</li>
                            <li>габаритов товара</li>
                            <li>места разгрузки</li>
                        </ul>
                        <p>Мы перевозим продукцию морскими путями, автотранспортом, с помощью железнодорожных путей. Доверяя нам, можете быть уверены, что заказанный товар прибудет в оговоренные сроки в целости и сохранности. Наши квалифицированные менеджеры разработают самый оптимальный и недорогой вариант доставки. Вы будете постоянно в курсе, где находится ваш груз с помощью СМС оповещения.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}