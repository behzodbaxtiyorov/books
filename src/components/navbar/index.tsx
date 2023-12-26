import { DownOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      label: (
        <Link to={"/account"} className="flex items-center gap-[6px] px-[8px] py-[4px]">
        <UserOutlined />
        <p className="text-[15px] p-0">Account</p>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"/account"}className="flex items-center gap-[6px] px-[8px] py-[4px]">
        < SettingOutlined/>
        <p className="text-[15px] p-0">Settings</p>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex items-center gap-[6px] px-[8px] py-[4px]">
          <LogoutOutlined />
          <p className="text-[15px] p-0">Log out</p>
        </div>
      ),
      key: "2",
    },
  ];

  return (
    <div className="container-box flex items-center justify-between">
      <h1 className="text-[26px] font-semibold select-none  font-rotterburg text-[#C9AC8C]">
        Badiiyat
      </h1>
      <div className="flex items-center gap-[43px]">
        <NavLink
          to={"/"}
          className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
        >
          Bosh sahifa
        </NavLink>
        <NavLink
          to={"/authors"}
          className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
        >
          Adiblar
        </NavLink>
        <NavLink
          to={"/books"}
          className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
        >
          Barcha kitoblar
        </NavLink>
        <NavLink
          to={"/maqolalar"}
          className="dark:text-white py-[28px] font-crimson border-b-[3px] border-t-[3px] border-t-transparent text-[19px] font-semibold border-b-transparent hover:border-b-[#C9AC8C] duration-150"
        >
          Maqolalar
        </NavLink>
      </div>
      {localStorage.getItem("token") ?(
        <div>
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-[4px]">
            <Avatar size="large" icon={"A"} />
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
      ) :(
        <div className="flex items-center gap-[10px]">
        <Button onClick={() => navigate("Sign-in")}>Sign in</Button>
        <Button onClick={() => navigate("Sign-up")} type="primary">Sign up</Button>
      </div>
      )}
    </div>
  );
};

export default Navbar;
