/* eslint-disable no-nonoctal-decimal-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-constant-condition */
import { Button, Form, Image, Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";
import useUsersApi from "../../service/api/users";
import InputMask from "react-input-mask";

type FieldType = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  confirm_password?: string;
};

const Account = () => {
  const { getOneUserById, updateOneUserById } = useUsersApi();
  const [me, setMe]: any = useState();
  useEffect(() => {
    getOneUserById(localStorage.getItem("id")).then((data) => setMe(data.data));
  }, []);

  const formData = new FormData();

  const onFinish = (values: any) => {
    for (const key in values) {
      formData.append(key, values[key]);
    }
       formData.append("image", "https://cdn.bio.link/uploads/thumbnails/2023-09-17/BQBh8bGFFShDbye8nwwIk7NavnvvKSp3.png")

    updateOneUserById(
       {...formData},
      me?.id
    ).then((data) => console.log(data?.data));
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Profilim",
      children: (
        <div className="flex items-center gap-[30px] bg-slate-100 py-4 px-4 rounded-[10px]">
          <div
            className="w-[130px] h-[130px] rounded-[100%] flex items-center justify-center text-[80px] text-white "
            style={{
              backgroundColor: localStorage.getItem("avatar_theme") || "gray",
            }}
          >
            {me?.image === null ? (
              localStorage.getItem("first_name")?.slice(0, 1)
            ) : (
              <Image src={me?.image} />
            )}
          </div>
          <div>
            <h1 className="text-[30px] font-semibold">
              {me?.first_name + " " + me?.last_name}
            </h1>
            <h2 className={`text-[20px] font-medium text-gray-500`}>
              {me?.email}
            </h2>
            <p className="font-bold mt-[20px]">{me?.phone}</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Sozlamalar",
      children: (
        <div>
          <div className="flex  gap-5 flex-col">
            <h1 className="text-[20px] font-semibold text-red-500">
              * Ma`lumotlaringizni o`zgartirib, saqlang!
            </h1>
            <Form
              className=" w-full"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item<FieldType>
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Iltimos yangi ismingizni kiriting!",
                  },
                ]}
              >
                <Input
                  defaultValue={me?.first_name}
                  size="large"
                  placeholder="Ismingizni kiriting"
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "Iltimos yangi familyangizni kiriting!",
                  },
                ]}
              >
                <Input
                  defaultValue={me?.last_name}
                  size="large"
                  placeholder="Familyangizni kiriting"
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Iltimos yangi telefon raqamingizni kiriting!",
                  },
                ]}
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
                  <Input
                    defaultValue={me?.phone}
                    size="large"
                    placeholder="Telefon raqamingizni kiriting"
                  />
                </InputMask>
              </Form.Item>

              <Form.Item<FieldType>
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Iltimos yangi emailingizni kiriting!",
                  },
                ]}
              >
                <Input
                  defaultValue={me?.email}
                  size="large"
                  placeholder="Emailingizni kiriting"
                />
              </Form.Item>
              <div className="flex items-center w-full gap-2">
                <Form.Item<FieldType>
                  name="password"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos yangi parolingizni kiriting",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Yangi parolingizni kiriting"
                  />
                </Form.Item>
                <Form.Item<FieldType>
                  name="confirm_password"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos yangi parollingizni takrorlang",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Yangi parolni takrorlang"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button loading={false} type="primary" htmlType="submit">
                  Saqlash
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      ),
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div>
      <div className="w-full max-w-[900px] mx-auto mt-[50px]">
        <div>
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
