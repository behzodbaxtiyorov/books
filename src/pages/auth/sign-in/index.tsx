/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button,  Form, Input } from 'antd';
import log_image from "../../../assets/images/log.svg"
import { Link } from 'react-router-dom';


type FieldType = {
  username?: string;
  password?: string;
  email?: string;
};

const SignIn = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  

  return (
    <div className="flex items-center h-screen w-full">
      <div className="bg-[#c9ac8c] flex-1 h-full w-[50%]  select-none flex items-center justify-center">
        <img className="w-[800px]  select-none" src={log_image} alt="Login poster image" />
      </div>
      <div className="flex-1 h-full w-[50%] flex items-center justify-center  ">
        <div className='flex flex-col  m-auto mt-auto mb-auto max-w-[350px]'>
        <h1 className='text-[36px] font-bold mb-[10px]'>Sign in</h1>
        <p className='p-0 text-[14px] font-normal mb-[30px]'>Do not you have an account?  {" "} <Link className='text-[#549FF9] underline' to={"/sign-up"}>Sign up</Link></p>
      <Form
      className=' w-full'
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout='vertical'
  >
    <Form.Item<FieldType>
      
      name="email"
      rules={[{ type:"email", required: true, message: '"Email"da xatolik mavjud!' }]}
    >
      <Input size='large' placeholder='Enter your username' />
    </Form.Item>

    <Form.Item<FieldType>
      
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password size='large' placeholder='Enter your passsword' />
    </Form.Item>

    
    <Form.Item >
      <Button type="primary" htmlType="submit">
        Sign in
      </Button>
    </Form.Item>
  </Form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;