import React from "react";
import { Typography } from 'antd';
const { Title } = Typography;
import { Button } from 'antd';
import {withRouter} from 'react-router';
import './index.css';

const Home = () => {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  } 
  
  return (
    <div className="home-container">
      <div>
        <Title>Welcome to Home page! You're un authorized user!</Title>
        <Button type="primary" onClick={logout} className="login-form-button">
          Log out
        </Button>
      </div>
    </div>
  );
}

export default withRouter(Home);
