import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FilmsDetails = () => {
  const [film, setFilm] = useState();

  useEffect(() => {
    fetch(`http://api-ghibli.herokuapp.com/films/${filmsid}`)
      .then((res) => res.json())
      .then((data) => setFilm(data))
      .catch((e) => alert(e.message));
  }, []);

  const { filmsid } = useParams();

  return (
    <div className="col-md-12">
      <section className="row justify-content-center">
        <Link to="/films" btn btn-primary>
          back
        </Link>
        
          <div key={film?.id}>
            <div className="card shadow my-2">
              <div className="card-body">
                <h4 className="card-title">Film ID: {filmsid}</h4>
                <p className="card-subtitle text-muted">
                  {film?.original_title}
                </p>
                <p className="card-text">{film?.description}</p>
                <p className="card-header">Release date: {film?.release_date}</p>
              </div>
            </div>
          </div>
       
      </section>
    </div>
  );
};

export default FilmsDetails;
