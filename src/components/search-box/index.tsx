import { SearchOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"
import { useTranslation } from "react-i18next";


const SearchBox = () => {
  const { t } = useTranslation();
  return (
    <div style={{transform: "translate(-50%, 0)"}}  className=" bg-white left-[50%] mx-auto max-w-[1080px] rounded-[15px] flex items-center flex-col w-full px-[86px] pt-[30px] pb-[30px] absolute bottom-[-100px] shadow-md">
        <h2 className="text-center text-[28px] font-rotterburg text-[#c9ac8c]  ">{t("searchsection.title")}</h2>
        <div className="w-full flex items-center gap-[14px] mt-[13px]">
        <Input size="large" placeholder={t("searchsection.inputPl")} />
        <Button type="primary" icon={<SearchOutlined />} > {t("searchsection.btn")}
        </Button>
        </div>
           
    </div>
  )
}

export default SearchBox