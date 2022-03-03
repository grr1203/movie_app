import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <Link to={`/movie/${id}`} className="movie__title">
          {title}
        </Link>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres &&
            genres.map((genre, index) => <li key={index}>{genre + " "}</li>)}
        </ul>
        <p className="movie__summary">
          {summary.slice(0, 200) + (summary.length >= 200 ? "..." : "")}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
