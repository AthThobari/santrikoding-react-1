//import useMutation from '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface UserRequest
interface UserRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const useUserCreate = () => {
  return useMutation({
    //mutation for create user
    mutationFn: async (data: UserRequest) => {
      //get token from cookies
      const token = Cookies.get("token");

      //using service API for register
      const response = await Api.post("/api/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return response data
      return response.data;
    },
  });
};
