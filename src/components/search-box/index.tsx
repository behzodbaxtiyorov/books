import { SearchOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"


const SearchBox = () => {
  return (
    <div style={{transform:"translate(-50%, 0)"}} className=" bg-white left-[50%] mx-auto max-w-[1080px] rounded-[15px] flex items-center flex-col w-full px-[86px] pt-[30px] pb-[30px] absolute bottom-[-100px] shadow-md">
        <h2 className="text-center text-[28px] font-rotterburg text-[#c9ac8c]  ">Qidirish</h2>
        <div className="w-full flex items-center gap-[14px] mt-[13px]">
        <Input size="large" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
        <Button type="primary" icon={<SearchOutlined />} > Izlash
        </Button>
        </div>
           
    </div>
  )
}

export default SearchBox