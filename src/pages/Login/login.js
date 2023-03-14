import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
const Login = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="form__container">
        <div className="circle__one circle"></div>
        <div className="circle__two circle"></div>
        <h2 className="form__container-title">ĐĂNG NHẬP TÀI KHOẢN</h2>
        <Form
          form={form}
          onFinish={onFinish}
          scrollToFirstError
          className="form"
          layout="vertical"
        >
          <Form.Item
            name="email"
            className="form__input"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Email không hợp lệ!",
              },
              {
                required: true,
                message: "Vui lòng nhập email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              style={{ width: "100%", height: "50px" }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            className="form__input"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
            // hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ height: "50px" }}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="form__btn">
            Đăng nhập
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
