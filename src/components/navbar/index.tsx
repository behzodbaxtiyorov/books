/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  DownOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Button,
  Dropdown,
  Modal,
  Popconfirm,
  Segmented,
  message,
} from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import lng from "../../assets/icons/lng.svg";
import moonIcon from "../../assets/icons/moon.svg";
import sunnIcon from "../../assets/icons/sunn.svg";
import  { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [darkMode, setDarkMode]: any = useState("light");
  const [openModal, setOpenModal]: any = useState(false);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const confirm = async () => {
    localStorage.clear();
    message.info("Siz tizimdan chiqdingiz");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link
          to={`/account/${localStorage.getItem("id")}`}
          className="flex items-center gap-[6px] px-[8px] py-[4px]"
        >
          <UserOutlined />
          <p className="text-[15px] p-0">{t("navbarDrop.text1")}</p>
        </Link>
      ),
      key: "1",
    },
    
    {
      label: (
        <Popconfirm
          title="Tizimdan chiqish?"
          description="Tizimdan rostdan ham chiqmoqchimisiz?"
          onConfirm={confirm}
          okText="Ha chiqaman"
          cancelText="yoq"
        >
          <div className="flex items-center gap-[6px] px-[8px] py-[4px]">
            <LogoutOutlined />
            <p className="text-[15px] p-0">{t("navbarDrop.text2")}</p>
          </div>
        </Popconfirm>
      ),
      key: "2",
    },
  ];

  return (
    <>
      <Modal
    okButtonProps={{style:{display: "none"}}}
    cancelButtonProps={{style:{display: "none"}}}
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
        open={openModal}
        title="Tilni o`zgartirish"
      >
        <Segmented
        className="mb-[30px] mt-[20px]"
          block
          size="large"
          options={[
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>O`zbekcha </div>
                </div>
              ),
              value: "uz",
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Inglizcha</div>
                </div>
              ),
              value: "en",
            },
          ]}
          onChange={(e: any) => changeLanguage(e)}
        />
      </Modal>

      <div className="container-box flex items-center justify-between">
        <h1
          onClick={() => navigate("/")}
          className="text-[26px] font-semibold select-none  font-rotterburg text-[#C9AC8C] cursor-pointer"
        >
          Badiiyat
        </h1>
        <div className="flex items-center gap-[43px]">
          <NavLink
            to={"/"}
            className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
          >
            {t("navbar.text1")}
          </NavLink>
          <NavLink
            to={"/authors"}
            className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
          >
            {t("navbar.text2")}
          </NavLink>
          <NavLink
            to={"/books"}
            className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
          >
            {t("navbar.text3")}
          </NavLink>
          <NavLink
            to={"/maqolalar"}
            className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
          >
           {t("navbar.text4")}
          </NavLink>
        </div>
        <div className="flex items-center gap-[20px]">
          <img
            onClick={() => setOpenModal(true)}
            className="w-[25px] h-[25px] cursor-pointer"
            src={lng}
            alt=""
          />
          {darkMode === "dark" ? (
            <img
              onClick={() => {
                setDarkMode("light");

                document.documentElement.classList.remove("dark");
              }}
              className="w-[25px] h-[25px] cursor-pointer"
              src={sunnIcon}
              alt=""
            />
          ) : (
            <img
              onClick={() => {
                setDarkMode("dark");

                document.documentElement.classList.add("dark");
              }}
              className="w-[25px] h-[25px] cursor-pointer"
              src={moonIcon}
              alt=""
            />
          )}
          {localStorage.getItem("token") ? (
            <div>
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-[4px]">
                  <Avatar
                    style={{
                      backgroundColor:
                        localStorage.getItem("avatar_theme") || "black",
                    }}
                    size="large"
                    icon={localStorage.getItem("first_name")?.slice(0, 1)}
                  />
                  <DownOutlined />
                </div>
              </Dropdown>
            </div>
          ) : (
            <div className="flex items-center gap-[10px]">
              <Button onClick={() => navigate("Sign-in")}>Kirish</Button>
              <Button onClick={() => navigate("Sign-up")} type="primary">
                Registratsiya
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
