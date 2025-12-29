// import hook react
import { useContext } from "react";

// import js-cookie
import Cookies from "js-cookie";

// import hook useNavigate from react-router
import { useNavigate } from "react-router";

// import context
import { AuthContext } from "../../context/AuthContext";

// custom hook useLogout
export const useLogout = (): (() => void) => {
  // Get setIsAuthenticated from context
  const authContext = useContext(AuthContext);

  //Use null assertion because we are sure that AuthContext will
  //always be available
  const { setIsAuthenticated } = authContext;

  //Initialize navigate
  const navigate = useNavigate();

  //logout function
  const logout = (): void => {
    // delete token and user from cookie
    Cookies.remove("token");
    Cookies.remove("user");

    // Change authentication status to false
    setIsAuthenticated(false);

    // Navigate to login page
    navigate("/login");
  };

  return logout;
};
