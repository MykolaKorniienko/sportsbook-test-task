import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input 
            prefix={<MailOutlined className="site-form-item-icon" />} 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={setEmail} 
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
