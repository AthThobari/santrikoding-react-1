// import FC from react
import { FC } from "react";

// import Link from react-router
import { Link } from "react-router";

const Home: FC = () => {
  return (
    <div className="p-5 mb-4 rounded-5 shadow-sm">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold"> FULLSTACK DEVELOPER</h1>
        <p className="col-md-12 fs-4">
          Belajar Fullstack Develeper dengen Golang dan React TS di
          santrikoding.com
        </p>
        <hr />
        <Link to="/register" className="btn btn-primary btn-lg me-3"
style={{ minWidth: "150px"}}
>
          Register
        </Link>
        <Link to="/login" className="btn btn-primary btn-secondary me-3 px-5 btn-lg"
style={{ minWidth: "150px", minHeight: "48px"}}
>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
