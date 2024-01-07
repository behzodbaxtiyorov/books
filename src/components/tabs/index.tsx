/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useCategoriesApi from "../../service/api/category"


const Tabs = () => {
    const [tabs, setTabs]: any = useState([]);
    const [activeTab, setActiveTab]: any = useState();
    const {getAllCategories} = useCategoriesApi();
    useEffect(() => {
        getAllCategories().then((res) => {
            setTabs(res.data);
            setActiveTab(res.data?.[0].name);
        });
        console.log(activeTab);
    }, [])


    
  return (
    <div>
    <div className="mt-[150px] flex items-center justify-center">
      <div className="mb-4 ">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
            {tabs?.map((category: any, index: any) => (
              <li key={index} className="me-2" role="presentation" onClick={() =>
            //   tabs.find((category: any) => category.name )
            setActiveTab(category?.name)
              }
            >
              <button
                className="inline-block font-crimson text-[20px] p-4 duration-100 hover:bg-slate-100 "
                style={{color: activeTab === category?.name ? "#c9ac8c": "black"}}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {category?.name}
              </button>
            </li>
            ))}
          
        </ul>
      </div>
      </div>
      <div>{activeTab}</div>
      </div>
  )
}

export default Tabs