import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import style from "./About.module.css";

function About() {
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const {
      data: {
        data: {
          movie: {
            year,
            title,
            description_intro: summary,
            medium_cover_image: poster,
            genres,
          },
        },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const movie = { year, title, summary, poster, genres };
    setMovie(movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className={style.container}>
      {Loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <Movie
          key={id}
          id={parseInt(id)}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.poster}
          genres={movie.genres}
        />
      )}
    </section>
  );
}

export default About;
