import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: "auto 0px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "0px 16px", width: "100%" }}>
        {/* <Spin spinning={mutation.isPending}> */}
        <h3 style={{ textAlign: "center" }}>Register</h3>
        <Form
          // initialValues={{ name: 'John Doe' }}
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 400,
            margin: "auto",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="large"
        >
          <Form.Item
            style={{ marginBottom: "10px" }}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "10px" }}
            label="Password"
            name="password"
            labelCol={{ style: { fontSize: "20px" } }}
            rules={[
              {
                required: true,
                pattern: /^.{8,16}$/,
                message: "Password must be at least 8 characters!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              // offset: 8,
              span: 24,
            }}
            style={{ marginTop: "40px" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "inline-block", width: "100%" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center" }}>
          <Link to="/login">Go To Login</Link>
        </div>
        {/* </Spin> */}
      </div>
    </div>
  );
};

export default Register;
