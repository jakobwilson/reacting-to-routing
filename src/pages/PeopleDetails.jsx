import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PeopleDetails = () => {
  const [people, setPeople] = useState();

  useEffect(() => {
    fetch(`http://api-ghibli.herokuapp.com/people/${peopleid}`)
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((e) => alert(e.message));
  }, []);

  const { peopleid } = useParams();

  return (
    <div className="col-md-12">
      <section className="row justify-content-center mt-5">
        <Link to="/people" btn btn-primary>
          back
        </Link>

        <div className="col-md-6" key={people?.id}>
          <div className="card shadow my-2">
            <div className="card-body">
              <h4 className="card-title">Person ID: {peopleid}</h4>

              <p className="card-subtitle text-muted">Age: {people?.age}</p>
              <p className="card-text">Gender: {people?.gender}</p>
              <p className="card-text">Eye Color: {people?.eye_color}</p>
              <p className="card-text">Hair Color: {people?.hair_color}</p>
              <a href={people?.url} className="card-link">
                {people?.url}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeopleDetails;
