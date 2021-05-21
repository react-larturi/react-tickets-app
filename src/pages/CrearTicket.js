import React from 'react';

import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title } = Typography;

export const CrearTicket = () => {

    useHideMenu(true);

    const nuevoTicket = () => {

    };

    return (
        <>

            <Row>
                <Col 
                    span={14} 
                    offset={6}
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

            <Row style={{ marginTop: 100 }}>
                <Col 
                    span={14} 
                    offset={6}
                    align="center"
                >
                    <Text style={{ fontSize: 22 }}>
                        Su número
                    </Text>
                    <br />
                    <Text type="success" style={{ fontSize: 50 }}>
                        43
                    </Text>
                    
                </Col>
            </Row>
            
        </>
    )
}
