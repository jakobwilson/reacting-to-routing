import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://api-ghibli.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div className="col-md-12">
      <section className="row justify-content-center mt-5">
        <Link to="/" btn btn-primary>
          Home
        </Link>
        <h1>People List</h1>
        {people.map((people) => (
          <div className="col-md-6" key={people.id}>
            <div className="card shadow my-2">
              <div className="card-body">
                <h4 className="card-title fw-bold">- {people.name} </h4>

                <Link
                  to={`/people/${people.id}`}
                  className="btn btn-primary mt-2"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default People;
