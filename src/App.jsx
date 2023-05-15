import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";

const App = () => {
  return (
    <BrowserRouter>
      <main className="container mt-3">
        <section className="row justify-content-center">
          <div className="col-md-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/films/:filmsid" element={<FilmsDetails />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/:peopleid" element={<PeopleDetails />} />
              <Route path="*" element={<p>404 Not Found</p>} />
            </Routes>
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
