import React from 'react';
import 'antd/dist/antd.css';
import '../../src/Styles/style.scss';
import { Typography, Layout, Menu, Button, Col, Row, Image } from 'antd';
import { TwitterOutlined, LinkedinFilled } from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
const { Text } = Typography;
const { Footer } = Layout;

function FooterMain() {
  return (
    <div>
      <Footer className="footer">
        <div className="logo-footer">
          <Text className="footer-title">Kristina Shrestha</Text>
          <hr
            style={{
              marginTop: '5%',
              color: '#E5E5E5',
              backgroundColor: '#E5E5E5',
              height: 0.5,
            }}
          />
          <Row>
            <Col span={22}>
              <Menu mode="horizontal" className="navbar-footer">
                <Menu.Item>Founders</Menu.Item>
                <Menu.Item>Beneficiaries</Menu.Item>
                <Menu.Item>Scholarship</Menu.Item>
                <Menu.Item>Press</Menu.Item>
                <Menu.Item>Blog</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
              </Menu>
            </Col>
            <Col span={2}>
              <div style={{ marginLeft: '70%' }}>
                <TwitterOutlined />
                <LinkedinFilled style={{ paddingLeft: '10%' }} />
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-end">
          <Row>
            <Col span={12}>
              <div className="footer-end-links">
                <li style={{ width: '20%' }}>
                  <NavLink
                    to="/privacy-policy"
                    className="footer-end-left"
                    exact
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li style={{ width: '30%' }}>
                  <NavLink to="/terms-conditions" className="footer-end-left">
                    Terms and Conditions
                  </NavLink>
                </li>
              </div>
            </Col>
            <Col span={12}>
              <Text className="copyright">
                © 2021 Company Name. All rights reserved.
              </Text>
            </Col>
          </Row>
        </div>
      </Footer>
    </div>
  );
}

export default FooterMain;
