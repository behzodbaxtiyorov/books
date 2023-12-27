import CarouselUI from "../../components/carousel";
import SearchBox from "../../components/search-box";



const Home = () => {
  
  return <div className="container-box relative">
    <div className="mt-[54px] rounded-[21px] overflow-hidden">
        <CarouselUI />
        <SearchBox />
        
      </div>
  </div>;
};

export default Home;
