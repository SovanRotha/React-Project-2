import { useState, useEffect } from "react";
import Caursel from "./Caursel";
import { useNavigate } from "react-router-dom";


const slides = [
  "https://i.pinimg.com/1200x/a9/86/b7/a986b74c0f5afa489f2b96646f6bdadf.jpg",
  "https://i.pinimg.com/1200x/03/cf/74/03cf7419e7fa8c3983938d6760ae2652.jpg",
  "https://i.pinimg.com/1200x/29/3a/52/293a528d8963f23abd99aaadf22beff3.jpg",
];


function Explore() {
  const [movies, setmovies] = useState([]);
  const [visible, setvisible] = useState(10);
  const navigate = useNavigate();

  
//   const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setmovies(data.results);
        // setloading(false);
      });
  }, []);

//   if (loading) {
//     return <h2>Loading Movies.....</h2>;
//   }
  return (
    <div className="">

      <Caursel slides={slides} />


      <h1 className="text-white text-4xl p-4 font-bold dark:text-black dark:font-bold">Explore Movies Here</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 auto-cols-fr gap-5 p-1">
        {movies.slice(0, visible).map((movie) => (
          <div key={movie.id} className="">
            <img
              onClick={() => navigate(`/MovieDetail/${movie.id}`)}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg hover:scale-105 transition duration-150"
            />
            <h3 className="mt-3 text-white text-xl font-semibold truncate dark:text-black">
              {movie.title}
            </h3>
            <div className="flex justify-between mt-2">
              <span className="text-white dark:text-gray-700 dark:font-bold">
                Relase Date: {movie.release_date}
              </span>
              <span className="text-yellow-300 dark:text-yellow-500 dark:font-semibold">
              
                Rating : {movie.vote_average}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button 
        onClick={() => setvisible((pre) => pre +5)}
         className={`bg-indigo-500 text-white text-2xl text-center font-bold pr-5 pl-5 pt-3 pb-3 rounded-lg hover:bg-indigo-600 mt-5 ${visible> movies.length ? "hidden" : ""}`}>
          See More
        </button>
      </div>
    </div>
  );
}
export default Explore;
