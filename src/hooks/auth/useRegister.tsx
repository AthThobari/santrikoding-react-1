// import useMutation from '@tanstack/reacct-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

//interface RegisterRequest
interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  return useMutation({
    // mutation for register
    mutationFn: async (data: RegisterRequest) => {
      // using service API to register
      const response = await Api.post("/api/register", data);

      //return response data
      return response.data;
    },
  });
};
