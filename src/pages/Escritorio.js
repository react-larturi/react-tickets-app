import React, { useState } from 'react';

import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Redirect, useHistory } from 'react-router';

const { Title, Text } = Typography;

export const Escritorio = () => {

    const history = useHistory();

    useHideMenu(false);
    const [ usuario ] = useState(getUsuarioStorage());

    const salir = () => {
        localStorage.clear();
        history.push('/ingresar');
    };

    const siguienteTicket = () => {

    };

    if (!usuario.agente || !usuario.escritorio) {
        return <Redirect to="/ingresar" />
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{usuario.agente}</Title>
                    <Text>Estas trabajando en el escritorio: </Text>
                    <Text 
                        type="success" 
                        style={{ fontSize: 20 }}
                    >{usuario.escritorio}</Text>
                </Col>

                <Col span={4} align="right">
                    <Button
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col>
                    <Text>Estas atendiendo el ticket número: </Text>
                    <Text 
                        style={{ fontSize: 20 }}
                        type="danger"
                    >4</Text>
                </Col>
            </Row>

            <Row>
                <Col
                    offset={18}
                    span={6}
                    align="right"
                >
                    <Button
                        onClick={siguienteTicket}
                        type="primary"
                    >
                        Siguiente
                    </Button>
                    
                </Col>
            </Row>
        </>
    )
}
