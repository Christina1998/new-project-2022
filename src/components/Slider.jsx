import React, { Component } from 'react';
import Slider from 'react-slick';
import 'antd/dist/antd.css';
import '../../src/Styles/style.scss';
import { Typography, Layout, Menu, Button, Col, Row, Image } from 'antd';
const { Title, Text } = Typography;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const data = [
  {
    id: 0,
    url: '/images/beneficiaries/bene-1.png',
    caption: 'Morbi magna turpis dolor adipiscing',
  },
  {
    id: 1,
    url: '/images/beneficiaries/bene-2.jpg',
    caption: 'Curabitur cursus bibendum mauris placerat',
  },
  {
    id: 3,
    url: '/images/beneficiaries/bene-3.jpg',
    caption: 'Sagittis quam nunc platea est',
  },
  {
    id: 4,
    url: '/images/beneficiaries/bene-4.jpg',
    caption: 'Nisi, sed dui, ac enim',
  },
  {
    id: 4,
    url: '/images/beneficiaries/bene-4.jpg',
    caption: 'Nisi, sed dui, ac enim',
  },
  {
    id: 4,
    url: '/images/beneficiaries/bene-4.jpg',
    caption: 'Nisi, sed dui, ac enim',
  },
  {
    id: 4,
    url: '/images/beneficiaries/bene-4.jpg',
    caption: 'Nisi, sed dui, ac enim',
  },
  {
    id: 4,
    url: '/images/beneficiaries/bene-4.jpg',
    caption: 'Nisi, sed dui, ac enim',
  },
  {
    id: 4,
    url: '/images/beneficiaries/bene-4.jpg',
    caption: 'Nisi, sed dui, ac enim',
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="bene-container">
        <Slider {...settings}>
          {data.map((data) => {
            return (
              <div>
                <Image
                  className="image-latest"
                  preview={false}
                  src={data.url}
                />
                <Title level={4} className="bene-caption">
                  {data.caption}
                </Title>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
