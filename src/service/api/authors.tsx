/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios";

const useAuthorsApi = () => {
  const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const getAllAuthors = async () => api.get("/author", config);
  const getOneAuthorsById = async (id: any) => api.get(`/author/${id}`, config);
  return { getAllAuthors, getOneAuthorsById};

};



  export default useAuthorsApi;