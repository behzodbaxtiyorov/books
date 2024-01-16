/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthorsApi from "../../service/api/authors";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../store/loader";
import { message } from "antd";
import LoaderUI from "../../components/loader";


const AuthorDetails = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state);
  const { id } = useParams();
  const [author, setAuthor]: any = useState({});
  const navigate = useNavigate();
  const { getOneAuthorsById } = useAuthorsApi();
  useEffect(() => {
    dispatch(startLoading(true));
    getOneAuthorsById(id)
      .then((res: any) => {
        if (res.data) {
          setAuthor(res.data);
          dispatch(endLoading(false));
        }
      })
      .catch((err: any) => {
        message.error(err.message);
        dispatch(endLoading(false));
      });
  }, [id]);
  
  

  return (
    <div className="container-box " style={{marginTop:"60px"}}>
      {isLoading ? (
        <LoaderUI />
      ) : (
        <div className="w-full">
          <div className="flex items-start  w-full">
            <div className="flex flex-col min-w-[550px] max-w-[550px] w-full">
              <div className="w-[full] object-cover overflow-hidden rounded-xl">
                <img className="w-full" src={`https://literature-18wr.onrender.com/api/image/${author?.image}`} 
                alt={author?.first_name} />
              </div>

              <div className="flex items-center gap-[50px] mt-[30px]">
                <div className="flex flex-col">
                  <p className="text-gray-600">Tavallud sanasi</p>
                  <h1 className="text-[30px] font-rotterburg text-[#c9ac8c] font-bold">{author?.date_birth}</h1>
                </div>
                <div className="flex flex-col">
                  {author?.date_death != "live" && <p className="text-gray-600">Vafot etgan sanasi</p>}
                  <h1 className="text-[30px] font-rotterburg text-[#c9ac8c] font-bold">{author?.date_death !== "live" && author?.date_death}</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full ml-[60px]">
              <h1 className="text-[45px] font-rotterburg font-bold  text-[#c9ac8c] ">{author?.first_name + " " + author?.last_name}</h1>
              <p className="text-[25px] text-gray-700 font-crimson font-semibold">{author?.bio}</p>

              <div className="mt-[100px] w-full flex flex-col items-start">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-[35px] font-rotterburg font-bold  text-[#c9ac8c] ">Asarlari</h1>
                  <p
              onClick={() => navigate("/books")}
              className="cursor-pointer hover:text-[#c9ac8c] font-crimson text-[20px] hover:underline duration-100"
            >
              Barchasini ko'rish
            </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorDetails;
