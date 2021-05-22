import React, { useContext, useState } from 'react';

import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title } = Typography;

export const CrearTicket = () => {

    useHideMenu(true);

    const { socket } = useContext(SocketContext);
    const [ ticket, setTicket ] = useState(null);

    const nuevoTicket = () => {
        socket.emit('solicitar-ticket', null, (ticket) => {
            setTicket(ticket);
        });
    };

    return (
        <>

            <Row>
                <Col 
                    span={14} 
                    offset={5}
                    align="center"
                >
                    <Title level={2}>Presione el botón para genera un nuevo ticket</Title>

                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        size="large"
                        onClick={nuevoTicket}
                    >
                        Nuevo Ticket
                    </Button>
                    
                </Col>
            </Row>

            {
                ticket && (

                    <Row style={{ marginTop: 100 }}>
                        <Col 
                            span={14} 
                            offset={5}
                            align="center"
                        >
                            <Text style={{ fontSize: 22 }}>
                                Su número
                            </Text>
                            <br />
                            <Text type="success" style={{ fontSize: 50 }}>
                                {ticket.numero}
                            </Text>
                            
                        </Col>
                    </Row>

                )
            }
            
        </>
    )
}
