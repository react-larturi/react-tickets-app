import React, { useContext, useState } from 'react';

import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Redirect, useHistory } from 'react-router';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const Escritorio = () => {

    useHideMenu(false);

    const { socket } = useContext(SocketContext);
    const [ usuario ] = useState(getUsuarioStorage());
    const [ ticket, setTicket ] = useState(null);

    const history = useHistory();

    const salir = () => {
        localStorage.clear();
        history.push('/ingresar');
    };

    const siguienteTicket = () => {
        socket.emit('atender-proximo-cliente', usuario, (ticket) => {
            setTicket(ticket);
        });
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

            {
                ticket && (

                    <Row>
                        <Col>
                            <Text>Estas atendiendo el ticket número: </Text>
                            <Text 
                                style={{ fontSize: 20 }}
                                type="danger"
                            >{ticket.numero}</Text>
                        </Col>
                    </Row>
                )
            }

            

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
