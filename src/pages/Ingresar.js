import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';

import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography;

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 3, span: 16 },
};

export const Ingresar = () => {

    useHideMenu(false);

    const history = useHistory();
    const [ usuario ] = useState(getUsuarioStorage());

    const onFinish = ({ agente, escritorio }) => {
        localStorage.setItem('agente', agente);
        localStorage.setItem('escritorio', escritorio);
        history.push('/escritorio');
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (usuario.agente && usuario.escritorio) {
        return <Redirect to="/escritorio" />
    }

    return (
        <>
            <Title level={2}>Ingresar</Title>
            <Text>Ingrese su nombre y numero de escritorio</Text>
            <Divider />

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Nombre"
                    name="agente"
                    rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="escritorio"
                    rules={[{ required: true, message: 'Ingrese su numero de escritorio' }]}
                >
                    <InputNumber min={1} max={999} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                    >
                        <SaveOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
