/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from "@ant-design/icons";
import { Button,  Input } from "antd";
import { useTranslation } from "react-i18next";


interface SearchBoxProps {
  searchFunc?: any;
}

const SearchBox = (props: SearchBoxProps ) => {
  const { t } = useTranslation();
  
  return (
    <div
      
      className=" bg-white  mx-auto max-w-[1080px] rounded-[15px] flex items-center flex-col w-full px-[86px] pt-[30px] pb-[30px]  shadow-md"
    >
      <h2 className="text-center text-[28px] font-rotterburg text-[#c9ac8c]  ">
        {t("searchsection.title")}
      </h2>
      <div className="w-full flex items-center gap-[14px] mt-[13px]">
        
      
      
        <Input size="large" onChange={(e) => props?.searchFunc(e.target.value)} placeholder={t("searchsection.inputPl")} />
    
        <Button htmlType="submit" type="primary" icon={<SearchOutlined />}>
          {" "}
          {t("searchsection.btn")}
        </Button>
        
      </div>
    </div>
  );
};

export default SearchBox;
