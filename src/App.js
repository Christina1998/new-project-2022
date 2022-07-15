import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Col, Row, Typography } from 'antd';
import '../src/Styles/style.scss';
import Icon, {
  SnippetsFilled,
  CaretUpFilled,
  CaretDownFilled,
  MinusOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const obj = [
  {
    title: 'Data a',
    count: 340,
    percent: '50,2%',
    name: 'John James Bond',
    icon: (
      <SnippetsFilled
        style={{
          fontSize: 50,
          float: 'right',
          color: 'lightcoral',
        }}
      />
    ),
    percentIcon: <CaretUpFilled style={{ fontSize: 15, marginRight: 5 }} />,
  },
  {
    title: 'Data b',
    count: 500,
    percent: '10,2%',
    name: 'John James Bond',
    icon: (
      <SnippetsFilled
        style={{
          fontSize: 50,
          float: 'right',
          color: 'lightblue',
        }}
      />
    ),
    percentIcon: <CaretDownFilled style={{ fontSize: 15, marginRight: 5 }} />,
  },
  {
    title: 'Data c',
    count: 750,
    percent: '0,00%',
    name: 'James Bond',
    icon: (
      <SnippetsFilled
        style={{
          fontSize: 50,
          float: 'right',
          color: 'lightgreen',
        }}
      />
    ),
    percentIcon: <MinusOutlined style={{ fontSize: 15, marginRight: 5 }} />,
  },
  {
    title: 'Data d',
    count: 250,
    percent: '6,2%',
    name: 'James Bond',
    icon: (
      <SnippetsFilled
        style={{
          fontSize: 50,
          float: 'right',
          color: 'lightgrey',
        }}
      />
    ),
    percentIcon: <CaretUpFilled style={{ fontSize: 15, marginRight: 5 }} />,
  },
];

function App() {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      className="site-card-wrapper"
    >
      {obj.map((data) => {
        return (
          <Col lg={6}>
            <Card className="card-wrapper" bordered={false}>
              {data.icon}
              <Text type="secondary">{data.title}</Text>
              <Title level={2} style={{ fontWeight: 'bold', marginTop: 0 }}>
                {data.count}
              </Title>
              <Title level={4} style={{ color: 'lightgreen', marginTop: 0 }}>
                {data.percentIcon}
                {data.percent}
              </Title>
              <Text type="secondary">{data.name}</Text>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default App;
