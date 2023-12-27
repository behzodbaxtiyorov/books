import { Carousel } from "antd"


const CarouselUI = () => {
  return (
    <Carousel autoplay={true} autoplaySpeed={5000}  >
          <div className="banner-slider px-[86px] py-[45px] w-full bg-red-300 h-[346px]">
            <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[400px] leading-[65px]">Temuriylar davri adabiyoti</h3>
          </div>
          <div className="banner-slider px-[86px] py-[45px] w-full bg-red-300 h-[346px]">
            <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[400px] leading-[65px]">Kuch adolatdadur</h3>
          </div>
          <div className="banner-slider px-[86px] py-[45px] w-full bg-red-300 h-[346px]">
            <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[400px] leading-[65px]">Temur bobom tilla bobom</h3>
          </div>
          <div className="banner-slider px-[86px] py-[45px] w-full bg-red-300 h-[346px]">
            <h3 className="text-[63px] font-rotterburg text-[#c9ac8c] w-full max-w-[400px] leading-[65px]">Temir tigi kitobi</h3>
          </div>
          
        </Carousel>
  )
}

export default CarouselUI