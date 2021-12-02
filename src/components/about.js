import React from "react";
import {Row, Col} from "antd";

const items = [
    {
        key: '1',
        icon: <i className="fas fa-tachometer-alt"></i>,
        title: 'Habilidades Blandas',
    },
    {
        key: '2',
        icon: <i className="fas fa-hourglass-half"></i>,
        title: 'Historias de los mejores',
    },
    {
        key: '3',
        icon: <i className="fas fa-money-bill-wave"></i>,
        title: 'Networking',
    },
]

function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>¿Qué Aprenderas?</h2>
                    <p>Description</p>
                </div>
                <div className="contentHolder">
                    <p>Description. </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppAbout;
