import React from "react";
import { Carousel} from 'antd';

const items = [
    {
        key: '1',
        title: 'Ingenia',
        content: 'Description',
    },
    {
        key: '2',
        title: '¿Quienes somos?',
        content: 'Description',
    },
    {
        key: '3',
        title: '¿Por qué debes ir?',
        content: 'Description',
    },
]

function AppBanner() {
    return (
        <div id="hero" className="heroBlock">
            <Carousel>
                {items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppBanner;
