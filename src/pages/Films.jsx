import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Films = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('http://api-ghibli.herokuapp.com/films')
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(e => alert(e.message));
  }, []);


  return (
    <div className="col-md-12">
      <section className="row justify-content-center">
        <Link to='/' btn btn-primary>Home</Link>
        <h1>Films List</h1>
      {films.map(film => (
                    <div key={film.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">Film Title: {film.title} </h4>
                                
                                <Link to={`/films/${film.id}`} className="btn btn-primary mt-2">Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
      </section>
    </div>
  )
};

export default Films;
