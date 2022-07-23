import React from 'react';
import 'antd/dist/antd.css';
import '../../src/Styles/style.scss';
import { Typography, Layout, Menu, Button, Col, Row, Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const { Header, Content, Footer } = Layout;

function HeaderMain() {
  return (
    <div>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          paddingTop: '3%',
        }}
      >
        <div className="logo">Kristina</div>
        <Menu mode="horizontal" className="navbar">
          <Menu.Item>Founders</Menu.Item>
          <Menu.Item>Beneficiaries</Menu.Item>
          <Menu.Item>Scholarship</Menu.Item>
          <Menu.Item>Press</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}

export default HeaderMain;
