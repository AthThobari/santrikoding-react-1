// import FC from react
import { FC } from "react";

//import hook useNavigate from react router
import { useNavigate } from "react-router";

//import custom hook useLogin from hooks
import { useLogin } from "../../hooks/auth/useLogin";

//import js-cookie
import Cookies from 'js-cookie'

//import context
import { AuthContext } from '../../context/AuthContext';

interface ValidationErrors {
[key: string]: string;
}

const Login: FC = () => {

//initialize navigate
const navigate = useNavigate();


  return (
    <div className="p-5 mb-4 bg-light rounded-5 shadow-sm">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">HALAMAN LOGIN</h1>
        <p className="col-md 12 fs-4">
          Belajar FullStack Developer dengan Golang dan React TS di
          santrikoding.com
        </p>
      </div>
    </div>
  );
};

export default Login;
