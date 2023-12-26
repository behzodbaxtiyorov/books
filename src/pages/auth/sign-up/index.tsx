/* eslint-disable no-nonoctal-decimal-escape */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import reg_image from "../../../assets/images/register.svg";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

type FieldType = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
};

const SignUp = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center h-screen w-full">
      <div className="bg-[#c9ac8c] flex-1 h-full w-[50%]  select-none flex items-center justify-center">
        <img
          className="w-[800px]  select-none"
          src={reg_image}
          alt="Login poster image"
        />
      </div>
      <div className="flex-1 h-full w-[50%] flex items-center justify-center  ">
        <div className="flex flex-col  m-auto mt-auto mb-auto max-w-[350px]">
          <h1 className="text-[36px] font-bold mb-[10px]">Sign up</h1>
          <p className="p-0 text-[14px] font-normal mb-[30px]">
            Do not you have an account?{" "}
            <Link className="text-[#549FF9] underline" to={"/sign-in"}>
              Sign in
            </Link>
          </p>
          <Form
            className=" w-full"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              name="first_name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input size="large" placeholder="Enter your first name" />
            </Form.Item>
            <Form.Item<FieldType>
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input size="large" placeholder="Enter your last name" />
            </Form.Item>
            <Form.Item<FieldType>
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <InputMask
                mask="+\9\9\8\ (99) 999-99-99"
                maskPlaceholder={null}
                maskChar=""
                required={true}
                // value={phoneNumber}
                // onChange ={(e) => setPhoneNumber(e.target.value)}
                type="tel"
              >
                <Input size="large" placeholder="Enter your phone" />
              </InputMask>
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your passsword" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
