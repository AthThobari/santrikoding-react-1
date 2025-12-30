// import useMutation from '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface UserRequest for update
interface UserRequest {
  name: string;
  usesrname: string;
  email: string;
  password?: string; // optional password, because we might not want to change it
}

// Hook for user updates
export const useUserUpdate = () => {
  return useMutation({
    // Mutation for user updates
    mutation: async ({ id, data }: { id: number; data: UserRequest }) => {
      //get token from cookies
      const token = Cookies.get("token");

      //Use service API to update user
      const response = await Api.put(`/api/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // return response data
      return response.data;
    },
  });
};
