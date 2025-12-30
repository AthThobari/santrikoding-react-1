// import hook useQuery from react-query
import { useQuery } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface User
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useUserById = (id: number) => {
  return useQuery<User, Error>({
    //query key, adjusted to the user ID for caching
    queryKey: ["user", id],

    //query funcction
    queryFn: async () => {
      //get token from cookies
      const token = Cookies.get("token");

      //get user by id from api
      const response = await Api.get(`/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return data
      return response.data.data as User;
    },
  });
};
