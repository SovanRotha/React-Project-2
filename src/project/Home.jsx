// import Hork from "../Images/Hork.png";
// import { useState, useEffect } from "react";

// function Home() {
//   const [popular, setPopular] = useState([]);
//   const [recommended, setRecommended] = useState([]);
//   const [topRating, setTopRating] = useState([]);
//   const [upcoming, setUpcoming] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const API_KEY = "4113f3ad734e747a5b463cde8c55de42";

//         const urls = {
//           popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
//           recommended: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
//           topRating: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//           upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
//         };

//         const [popularRes, recommendedRes, topRatingRes, upcomingRes] = await Promise.all([
//           fetch(urls.popular),
//           fetch(urls.recommended),
//           fetch(urls.topRating),
//           fetch(urls.upcoming),
//         ]);

//         const popularData = await popularRes.json();
//         const recommendedData = await recommendedRes.json();
//         const topRatingData = await topRatingRes.json();
//         const upcomingData = await upcomingRes.json();

//         setPopular(popularData.results);
//         setRecommended(recommendedData.results);
//         setTopRating(topRatingData.results);
//         setUpcoming(upcomingData.results);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   // Reusable component showing **5 cards max**
//   const MovieSection = ({ title, movies }) => (
//     <>
//       <h1 className="text-white text-4xl p-4 font-bold">{title}</h1>
//       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-1">
//         {movies.slice(0, 5).map((movie) => (  // <-- LIMIT 5 cards
//           <div key={movie.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//               className="rounded-lg hover:scale-105 transition duration-150"
//             />
//             <h3 className="mt-3 text-white text-xl font-semibold truncate">
//               {movie.title}
//             </h3>
//             <div className="flex justify-between mt-2 text-sm">
//               <span className="text-white">Release: {movie.release_date}</span>
//               <span className="text-yellow-300">⭐ {movie.vote_average}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="h-screen bg-cover bg-center flex flex-col items-center justify-center p-2 space-y-5"
//         style={{ backgroundImage: `url(${Hork})`, opacity: 0.7 }}
//       >
//         <h1 className="text-center text-7xl font-bold text-white">All movies are here!</h1>
//         <h1 className="text-center text-7xl font-bold text-indigo-500">Free to watch.</h1>
//         <p className="text-center text-white font-semibold">
//           Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
//         </p>
//         <button className="bg-indigo-500 rounded-2xl p-3 w-[150px] text-white font-semibold hover:scale-105 transition duration-300">
//           Explore
//         </button>
//       </div>

//       {/* Movie Sections (each shows 5 cards) */}
//       <MovieSection title="Popular Movies" movies={popular} />
//       <MovieSection title="Recommended Movies" movies={recommended} />
//       <MovieSection title="Top Rated Movies" movies={topRating} />
//       <MovieSection title="Upcoming Movies" movies={upcoming} />
//     </div>
//   );
// }

// export default Home;

// import Hork from "../Images/Hork.png";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [popular, setPopular] = useState([]);
//   const [topRating, setTopRating] = useState([]);
//   const [upcoming, setUpcoming] = useState([]);
//   const [recommended, setRecommended] = useState([]);

//   const navigate = useNavigate();

//   const initialvisible = 5;
//   const [visible, setvisible] = useState(initialvisible);

//   const [visiblePopular, setVisiblePopular] = useState(5);
//   const [visibleTopRating, setVisibleTopRating] = useState(5);
//   const [visibleUpcoming, setVisibleUpcoming] = useState(5);
//   const [visibleRecommended, setVisibleRecommended] = useState(5);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const urls = {
//         popular:
//           "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
//         topRating:
//           "https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
//         upcoming:
//           "https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
//         recommended:
//           "https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
//       };

//       const [popularRes, topRatingRes, upcomingRes, recommendedRes] =
//         await Promise.all([
//           fetch(urls.popular),
//           fetch(urls.topRating),
//           fetch(urls.recommended),
//           fetch(urls.upcoming),
//         ]);
//       const popularData = await popularRes.json();
//       const topRatingData = await topRatingRes.json();
//       const upcomingData = await upcomingRes.json();
//       const recommendedData = await recommendedRes.json();

//       setPopular(popularData.results);
//       setTopRating(topRatingData.results);
//       setUpcoming(upcomingData.results);
//       setRecommended(recommendedData.results);
//     };

//     fetchApi();
//   }, []);

//   const MoviesSection = ({ title, movies, visible, setvisible }) => {
//     return (
//       <>
//         <div className="flex justify-between">
//           <h1 className="text-white text-4xl p-4 font-bold">{title}</h1>
//           <button
//             onClick={() =>
//               visible < movies.length
//                 ? setvisible((pre) => pre + 15)
//                 : setvisible(initialvisible)
//             }
//             className="text-blue-500 font-semibold p-4 mt-3 hover:text-blue-600"
//           >
//             {visible < movies.length ? "See More" : "See Less"}
//           </button>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-1">
//           {movies.slice(0, visible).map((movie) => (
//             <div key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="rounded-lg hover:scale-105 transition duration-150"
//                 onClick={() => navigate(`/MovieDetail/${movie.id}`)}
//               />

//               <h3 className="mt-3 text-white text-xl font-semibold truncate">
//                 {movie.title}
//               </h3>

//               <div className="flex justify-between mt-2 text-sm">
//                 <span className="text-white">
//                   Release: {movie.release_date}
//                 </span>
//                 <span className="text-yellow-300">⭐ {movie.vote_average}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div>
//       <div
//         className="h-screen bg-cover bg-center flex flex-col items-center justify-center p-2 space-y-5"
//         style={{ backgroundImage: `url(${Hork})`, opacity: 0.7 }}
//       >
//         <h1 className="text-center text-7xl font-bold text-white">
//           All movies are here!
//         </h1>
//         <h1 className="text-center text-7xl font-bold text-indigo-500">
//           Free to watch.
//         </h1>
//         <p className="text-center text-white font-semibold">
//           Stream unlimited movies and TV shows on your phone, tablet, laptop,
//           and TV.
//         </p>
//         <button className="bg-indigo-500 rounded-2xl p-3 w-[150px] text-white font-semibold hover:scale-105 transition duration-300">
//           Explore
//         </button>
//       </div>

//       <MoviesSection
//         title="Popular Movies"
//         movies={popular}
//         visible={visiblePopular}
//         setvisible={setVisiblePopular}
//       />
//       <MoviesSection
//         title="Top Rating Movies"
//         movies={topRating}
//         visible={visibleTopRating}
//         setvisible={setVisibleTopRating}
//       />
//       <MoviesSection
//         title="Up Coming Movies"
//         movies={upcoming}
//         visible={visibleUpcoming}
//         setvisible={setVisibleUpcoming}
//       />
//       <MoviesSection
//         title="Recommend Movies"
//         movies={recommended}
//         visible={visibleRecommended}
//         setvisible={setVisibleRecommended}
//       />
//     </div>
//   );
// }

// export default Home;


import { useState, useEffect } from "react";
import Hork from "../Images/Hork.png";
import { useNavigate } from "react-router-dom";



function Home()
{
  const [popular , setpopular ] = useState([]);
  const [topRating, setTopRating] = useState([]);
  const [upcoming , setUpcoming] = useState([]);
  const [recommended , setRecommended] = useState([]);

  const navigate = useNavigate();

  const initialvisible = 5
  const [visible, setvisible] = useState(initialvisible);

  const [visiblePopular ,setVisiblePopular] = useState(5);
  const [visibleRecommended, setVisibleRecommended] = useState(5);
  const [visibleUpcoming , setVisibleUpcoming] = useState(5);
  const [visibleTopRating , setVisibleTopRating] = useState(5);


  useEffect(()=>{
    const fetchMovies = async () =>
    {
      const urls = {
        popular:
          "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
        topRating:
          "https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
        upcoming:
          "https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
        recommended:
          "https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1",
      };
      const [popularRes, topRatingRes , upcomingRes, recommendedRes] = await Promise.all([
          fetch(urls.popular),
          fetch(urls.topRating),
          fetch(urls.recommended),
          fetch(urls.upcoming),
      ]);
      const popularData = await popularRes.json();
      const topRatingData = await topRatingRes.json();
      const upcomingData = await upcomingRes.json();
      const recommendedData = await recommendedRes.json();

      setpopular(popularData.results);
      setTopRating(topRatingData.results);
      setUpcoming(upcomingData.results);
      setRecommended(recommendedData.results);
    }
    fetchMovies();
  }, []);

  const MoviesSection = ({title , movies, visible , setvisible}) => {
    return(
      <div className="p-1">
        <div className="flex justify-between mb-3 mt-3  sm:flex-row ">
            <h1 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl  ml-2 sm:ml-2 md:ml-5 lg:ml-10 font-bold dark:text-black">{title}</h1>
            <button 
              onClick={() => visible < movies.length ? setvisible(visible + 15) : setvisible(5)}
            className="text-indigo-500 text-xl  font-semibold hover:text-indigo-600 mr-3 sm:mr-2 md:mr-5 lg:mr-10">
              {visible < movies.length ? "See More " : "See Less" }
            </button>
        </div>
        
       
          <div  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 p-2 gap-5 ">
              {movies.slice(0,visible).map((movie) =>
              (
                <div key={movie.id}>
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movies.title}
                      onClick={() => navigate(`/MovieDetail/${movie.id}`)}
                      className="rounded-lg transition duration-300 hover:scale-105 w-full h-auto"/>
                </div>
              )  
            )}  
        </div>
      </div>
    )
  }


  return(
    <div>
      <div className="relative h-screen bg-cover bg-center w-full"
     style={{ backgroundImage: `url(${Hork})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 
                  bg-white/10 dark:bg-black/70 
                  transition-colors duration-300">
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full p-2 space-y-5">
    <h1 className="text-center text-7xl font-bold text-white dark:text-white">
      All movies are here!
    </h1>

    <h1 className="text-center text-7xl font-bold text-indigo-500">
      Free to watch.
    </h1>

    <p className="text-center font-semibold text-white dark:text-white">
      Stream unlimited movies and TV shows on your phone, tablet, laptop,
      and TV.
    </p>

    <button
      onClick={() => navigate("/Explore")}
      className="bg-indigo-500 dark:bg-indigo-600
                 rounded-2xl p-3 w-[150px]
                 text-white font-semibold
                 hover:scale-105 transition duration-300"
    >
      Explore
    </button>
  </div>
</div>


       

      <MoviesSection title = "Popular Movies" movies={popular} visible={visiblePopular} setvisible={setVisiblePopular}></MoviesSection>
      <MoviesSection title = "Upcoming Movies" movies= {upcoming} visible = {visibleUpcoming} setvisible={setVisibleUpcoming}></MoviesSection>
      <MoviesSection title = "Top Rating Movies" movies = {topRating} visible={visibleTopRating} setvisible={setVisibleTopRating}></MoviesSection>
      <MoviesSection title = "Recommend Movies" movies = {recommended} visible={visibleRecommended} setvisible={setVisibleRecommended}></MoviesSection>

    </div>
  );
}
export default Home;