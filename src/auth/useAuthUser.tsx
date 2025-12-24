//import Js Cookie
import Cookies from "js-cookie";

//ineterface User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useAuthUser = (): User | null => {
  //Retrieving user data from cookies
  const user = Cookies.get("user");

  //If there is user data, parse the JSON and return it.
  //If empty, return null
  return user ? (JSON.parse(user) as User) : null;
};
