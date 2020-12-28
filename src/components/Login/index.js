import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import { connect } from 'react-redux';
import { loginUserAction } from '../../redux/actions/authenticationActions';
import {withRouter} from 'react-router';

const Login = props => {

  const onFinish = async user => {
    props.auth(user);
  };

  useEffect(() => {
    if (props.response) {
      if (props.response.data && props.response.data.access_token) {
        window.location.replace("/");
        message.success('You are logged in!');
      } else {
        message.error(props.response.message || 'Something goes wrong');
      }
    }
  });    

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
          />
        </Form.Item>
        {props.loading && <Spin/>}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  response: state.login.response,
  loading: state.loading.loading
}}

const mapDispatchToProps = {
	auth: loginUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));