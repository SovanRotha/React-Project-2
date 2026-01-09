// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function MovieDetail() {
//   const { id } = useParams(); // 👈 movie id from URL
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
//     )
//       .then(res => res.json())
//       .then(data => setMovie(data));
//   }, [id]);

//   if (!movie) return <h2 className="text-white">Loading...</h2>;

//   return (
//     <div className="p-6 text-white">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         className="rounded-lg mb-5"
//       />

//       <h1 className="text-4xl font-bold mb-3">{movie.title}</h1>
//       <p className="mb-3">{movie.overview}</p>

//       <p>⭐ Rating: {movie.vote_average}</p>
//       <p>📅 Release: {movie.release_date}</p>
//       <p>⏱ Runtime: {movie.runtime} min</p>
//     </div>
//   );
// }

// export default MovieDetail;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesDetail() {
  const { id } = useParams();

  const [movie, setmovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setmovie(data);
      });
  }, [id]);

  if (!movie) {
    return <h1> Movie Loading....</h1>;
  }

  return (
    <div className="flex justify-center items-center gap-10">
      <div className="p-12 ml-24">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[500px] h-auto rounded-xl"
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-white text-4xl font-bold dark:text-black dark:font-bold">{movie.title}</h1>
        <p className="text-white dark:text-black dark:font-semibold">Release Date : {movie.release_date}</p>
        <p className="text-yellow-400 dark:text-yellow-500">Rating : {movie.vote_average}</p>
        <p className="text-gray-400 leading-8 dark:text-gray-800">
          OverView <br />
          {movie.overview}
        </p>
        <button className="bg-indigo-600 p-3 rounded-lg text-white font-semibold hover:bg-indigo-700 ">
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default MoviesDetail;
