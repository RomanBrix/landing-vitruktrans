import React, { Component } from 'react';
export default class Content extends Component {
    render () {
        const { content_obj, fastCall } = this.props;
        const paragraphs = content_obj.text.map((item,index)=>{
            return( <p key={index}>{item}</p>)
        });
        let listArea = '';
        let listPreview = '';
        let listExist = false;
        if(content_obj.list !== undefined){
            listExist = true;
            listPreview = content_obj.list.preview;
            const mapList = content_obj.list.body.map((item, index)=>{
                return <li key={index}>{item}</li>
            });
            listArea = <ul>
                {mapList}
            </ul>
        }
        return (
            <div className={`big-content content-${content_obj.position}`} id={content_obj.id}>
                <div className="left-side" style={{backgroundImage: `url(${content_obj.photo})`}}>
                    {/*<img src={content_obj.photo} alt={content_obj.photo}/>*/}
                </div>
                <div className="right-side">
                    <h2>{content_obj.head}</h2>
                    {listExist ? <div className={'more-list'}>
                            {listPreview}
                            {listArea}
                    </div>
                    : ""
                    }
                    {paragraphs}
                    <div className="btn btn-consulting" onClick={()=>{
                        const number = prompt('Введите номер телефона и мы Вам перезвоним', +380);
                        fastCall(number);
                        // console.log(number);
                    }}>Получить консультацию <i className='icon-right'/></div>
                </div>
            </div>
        )
    }
}