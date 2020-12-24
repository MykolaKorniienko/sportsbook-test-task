import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import { fetchService } from "../../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const onFinish = async values => {
    const settings = {
      body: JSON.stringify({...values, two_factor_auth_code: ""})
    };
    const result = await fetchService(undefined, settings);
    console.log(result);
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
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Username"
            value={username}
            onChange={setUsername} 
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
