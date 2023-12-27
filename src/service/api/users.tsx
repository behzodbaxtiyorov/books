/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios.tsx";

const useUsersApi = () => {
const login = async (data: any) => api.post("/user/login", { ...data });
const register = async(data: any) => api.post("/user/register", { ...data });
  return { login, register };
}

export default useUsersApi;