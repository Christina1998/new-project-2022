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
      <Col lg={6}>
        <Card className="card-wrapper" bordered={false}>
          <SnippetsFilled
            style={{
              fontSize: 50,
              float: 'right',
              color: 'lightcoral',
            }}
          />
          <Text type="secondary">Data a</Text>
          <Title level={2} style={{ fontWeight: 'bold', marginTop: 0 }}>
            340
          </Title>
          <Title level={4} style={{ color: 'lightgreen', marginTop: 0 }}>
            <CaretUpFilled style={{ fontSize: 15, marginRight: 5 }} />
            50,2%
          </Title>
          <Text type="secondary">John James Bond</Text>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="card-wrapper" bordered={false}>
          <SnippetsFilled
            style={{
              fontSize: 50,
              float: 'right',
              color: 'lightblue',
            }}
          />
          <Text type="secondary">Data a</Text>
          <Title level={2} style={{ fontWeight: 'bold', marginTop: 0 }}>
            500
          </Title>
          <Title level={4} style={{ color: 'lightcoral', marginTop: 0 }}>
            <CaretDownFilled style={{ fontSize: 15, marginRight: 5 }} />
            10,2%
          </Title>
          <Text type="secondary">John James Bond</Text>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="card-wrapper" bordered={false}>
          <SnippetsFilled
            style={{
              fontSize: 50,
              float: 'right',
              color: 'lightgreen',
            }}
          />
          <Text type="secondary">Data a</Text>
          <Title level={2} style={{ fontWeight: 'bold', marginTop: 0 }}>
            750
          </Title>
          <Title level={4} style={{ color: 'grey', marginTop: 0 }}>
            <MinusOutlined style={{ fontSize: 15, marginRight: 5 }} />
            0,00%
          </Title>
          <Text type="secondary">John James Bond</Text>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="card-wrapper" bordered={false}>
          <SnippetsFilled
            style={{
              fontSize: 50,
              float: 'right',
              color: 'lightgrey',
            }}
          />
          <Text type="secondary">Data a</Text>
          <Title level={2} style={{ fontWeight: 'bold', marginTop: 0 }}>
            250
          </Title>
          <Title level={4} style={{ color: 'lightgreen', marginTop: 0 }}>
            <CaretUpFilled style={{ fontSize: 15, marginRight: 5 }} />
            6,2%
          </Title>
          <Text type="secondary">John James Bond</Text>
        </Card>
      </Col>
    </Row>
  );
}

export default App;
