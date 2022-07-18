import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Typography,
  Col,
  Row,
  Image,
} from 'antd';
import '../src/Styles/style.scss';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function App() {
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col span={16}>
        <header className="App-header">
          <Title level={3} style={{ fontWeight: 'bold' }}>
            Sign Up
          </Title>
          <Text type="secondary" style={{ fontSize: 13, textAlign: 'left' }}>
            Already have an account? Sign In
          </Text>
          <Form
            name="basic"
            labelCol={{ span: 12 }}
            className="form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <label required>Email</label>
            <Form.Item
              name="email"
              prefix={<MailOutlined className="item-icon" />}
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email' },
                { min: 3 },
                { whitespace: true },
              ]}
              className="input_label"
            >
              <Input
                prefix={<MailOutlined className="item-icon" />}
                className="input"
              />
            </Form.Item>
            <label required>Password</label>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="item-icon" />}
                className="input"
              />
            </Form.Item>
            <label>Confirm Password</label>

            <Form.Item
              name="confirm_password"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please input your password again!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      'The password you entered doesnot match'
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="item-icon" />}
                className="input"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className="button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </header>
      </Col>
      <Col span={8}>
        <Image className="image" preview={{ visible: false }} src="/pic.png" />
      </Col>
    </Row>
  );
}

export default App;
