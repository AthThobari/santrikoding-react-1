// import useMutation from '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

//interface LoginRequest
interface LoginRequest {
  username: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    // mutation for Login
    mutationFn: async (data: LoginRequest) => {
      // using service API to login
      const response = await Api.post("/api/login", data);

      // return response data
      return response.data;
    },
  });
};
