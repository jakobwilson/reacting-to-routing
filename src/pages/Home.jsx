import { Link } from "react-router-dom";

const Home = () => {
  return (
    < >
      <h1 className="text-center">Studio Ghibli API</h1>
      <div className="d-flex justify-content-center">
        <Link to="/Films">
          <button className="btn btn-primary my-3">View Films</button>
        </Link>
        <Link to="/People">
          <button className="btn btn-primary my-3 m-2">View People</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
