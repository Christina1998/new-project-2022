import React, { useState, Component } from 'react';
import 'antd/dist/antd.css';
import '../src/Styles/style.scss';
import { Typography, Layout, Menu, Button, Col, Row, Image } from 'antd';
import Slider from './components/Slider';
import HeaderMain from './components/Header';
import FooterMain from './components/Footer';
import {
  RightOutlined,
  TwitterOutlined,
  LinkedinFilled,
} from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter } from 'react-router-dom';
const { Title, Text } = Typography;
const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="background">
          <div className="header-icon">
            <TwitterOutlined />
            <LinkedinFilled />
          </div>
          <HeaderMain />
          <Content
            className="site-layout"
            style={{
              paddingTop: '20px',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 550,
              }}
            >
              <Row>
                <Col span={18}>
                  <Title
                    style={{ fontSize: 60, color: '#003A92' }}
                    className="main-title"
                  >
                    Ullamcorper diam turpis egestas egestas fames enim risus sed
                    proin fames enim risus sed proin
                  </Title>
                </Col>
                <Col span={6}>
                  <div className="read-button">
                    <Button size="large">Primary</Button>
                    <Button size="large">
                      <RightOutlined />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="image-container"
              style={{
                minHeight: 300,
                float: 'right',
              }}
            >
              <Image
                className="image"
                preview={false}
                src="/images/image.jpg"
              />
            </div>
            <div
              style={{
                paddingTop: 400,

                minHeight: 550,
                backgroundColor: '#f2efee',
              }}
            >
              <Row>
                <Col span={12} style={{ paddingLeft: 85 }}>
                  <Title level={3} style={{ color: '#003A92', paddingTop: 90 }}>
                    Latest News
                  </Title>
                  <div
                    style={{
                      padding: 30,
                      borderStyle: 'solid',
                      borderColor: 'white',
                    }}
                  >
                    <Image
                      className="latest-image"
                      preview={false}
                      src="/images/news.jpg"
                    />
                    <Text type="secondary">November 19 --2020</Text>
                    <Title level={2} style={{ marginBottom: 80 }}>
                      Molestie molesti metus, tempus in commodo, semper tellus
                      tempus in commodo, semper tellus
                    </Title>
                  </div>
                </Col>
                <Col span={12} style={{ paddingRight: 90 }}>
                  <div
                    style={{
                      padding: 30,
                      borderStyle: 'solid',
                      borderColor: 'white',
                    }}
                  >
                    <Image
                      className="image-latest"
                      preview={false}
                      src="/images/news-image.jpg"
                    />
                    <Text type="secondary">November 19 --2020</Text>
                    <Title level={3}>
                      Molestie molesti metus, tempus in commodo, semper tellus
                      tempus in commodo, semper tellus
                    </Title>
                  </div>

                  <Row>
                    <Col span={12}>
                      <div
                        style={{
                          padding: 30,
                          borderStyle: 'solid',
                          borderColor: 'white',
                        }}
                      >
                        <Image preview={false} src="/images/news-image-1.jpg" />
                        <Text type="secondary">November 19 --2020</Text>
                        <Title level={4}>
                          In faucibus suspendisse magna massa nibh elementum
                          augue phasellus tristique senectus urna
                        </Title>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        style={{
                          padding: 30,
                          borderStyle: 'solid',
                          borderColor: 'white',
                        }}
                      >
                        <Image preview={false} src="/images/news-image-2.jpg" />
                        <Text type="secondary">November 19 --2020</Text>
                        <Title level={4}>
                          In faucibus suspendisse magna massa nibh elementum
                          augue phasellus tristique senectus urna
                        </Title>
                      </div>
                    </Col>
                  </Row>
                  <div></div>
                </Col>
              </Row>
              <div className="overlap-image-2">
                <div className="red-background">
                  <Text className="text-1">OUR MISSION</Text>
                  <Text className="text-2">
                    Imperdiet quis leo scelerisque nunc magna mattis vitae non
                    non
                  </Text>
                  <Text className="text-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                </div>
                <div>
                  <Image
                    className="red-image"
                    preview={false}
                    src="/images/red-house.jpg"
                  />
                </div>
              </div>
            </div>
          </Content>
        </div>
        <div className="white-background">
          <Text className="slider-title">Beneficiaries</Text>
          <Slider />
          <div className="image-overlap-3">
            <div className="brown-background">
              <Text className="founder-title">The Founders</Text>
            </div>
            <div>
              <Row>
                <Col span={2}></Col>
                <Col span={20}>
                  <Image
                    className="founder-image"
                    preview={false}
                    alt="Maria Kenter"
                    src="/images/founders.jpg"
                  />
                  <div class="text-on-image">
                    <p> Maria Kenter</p>
                    <p>Roger Septimus</p>
                  </div>
                </Col>
                <Col span={2}></Col>
              </Row>
            </div>
          </div>
          <div className="gallery">
            <Text className="gallery-text">Gallery</Text>
            <Row>
              <Col span={8}>
                <div className="gallery-photos">
                  <Image preview={false} src="/images/gallery-1.jpg" />
                  <Text className="gallery-caption">
                    Caption lorem ipsum dolor sit amet
                  </Text>
                </div>
              </Col>
              <Col span={8}>
                <div className="gallery-photos">
                  <Image preview={false} src="/images/gallery-2.jpg" />
                  <Text className="gallery-caption">
                    Caption lorem ipsum dolor sit amet
                  </Text>
                </div>
              </Col>
              <Col span={8}>
                <div className="gallery-photos">
                  <Image preview={false} src="/images/gallery-3.jpg" />
                  <Text className="gallery-caption">
                    Caption lorem ipsum dolor sit amet
                  </Text>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <FooterMain />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
