import Image from "next/image";
import React from "react";
import login from "../../../../public/images/login.jpg";
import { Button, Checkbox, Form, Input } from "antd";



const Login = () => {
    // const onFinish = (values) => {
    //     console.log('Success:', values);
    //   };
    //   const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //   };
  return (
    <section className="lg:h-[100vh] flex items-center justify-center py-16 lg:py-0 px-1 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 justify-center items-center gap-10 lg:gap-16">
          <div>
            <Image
              src={login}
              alt="Banner img"
              className="w-full"
              width={400}
              height={300}
            />
          </div>
          <div>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
