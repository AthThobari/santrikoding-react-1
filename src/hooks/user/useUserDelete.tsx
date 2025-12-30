// import useMutation from '@tanstack/react-query'
import { useMutation } from "@tanstack/react-query";

// import service API
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

// Hook for delete user
export const useUserDelete = () => {
  return useMutation({
    //Mutation function for delete user
    mutationFn: async (id: number) => {
      // get token from cookies
      const token = Cookies.get("token");

      //Make a DELETE request to the API endpoint
      const response = await Api.delete(`/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return response
      return response.data;
    },
  });
};
