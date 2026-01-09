// import { useState , useEffect} from "react";
// import { ChevronLeft , ChevronRight } from "react-feather";

// function Caursel({slides})
// {
//      const [curr, setCurr] = useState(0);

//   const prev = () => {
//     setCurr(curr === 0 ? slides.length - 1 : curr - 1);
//   };

//   const next = () => {
//     setCurr(curr === slides.length - 1 ? 0 : curr + 1);
//   };

//     return (
//         <div>

//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide}
//             className="w-full h-full object-cover flex-shrink-0"
//             alt={`slide-${index}`}
//           />
//         ))}
//       </div>

//       {/* Left */}
//       <button
//         onClick={prev}
//         className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
//       >
//         <ChevronLeft className="text-white" />
//       </button>

//       {/* Right */}
//       <button
//         onClick={next}
//         className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
//       >
//         <ChevronRight className="text-white" />
//       </button>
//     </div>
//     </div>
//   );
// }
// export default Caursel;

import { ChevronLeft, ChevronRight } from "react-feather";
import { useState, useEffect } from "react";

function Caursel({ slides }) {
  const [curr, setcurr] = useState(0);

  // const prev = ()=> {setcurr( curr === 0 ? slides.length : curr - 1 )};
  // const next = ()=> {setcurr( curr === slides.length - 1 ? 0 : curr +1)};

  const prev = () => {
    setcurr(curr === 0 ? slides.length - 1 : curr - 1);
  };
  const next = () => {
    setcurr(curr === slides.length - 1 ? 0 : curr + 1);
  };

//    useEffect(() => {
//     const interval = setInterval(() => {
//       next();
//     }, 3000); // change slide every 3 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, [curr]); // curr as dependency so it updates correctly

    useEffect( () => {
        const interval = setInterval(()=> {next()}, 3000);
        
        return ()=> clearInterval(interval);
    }, [curr]);

  return (
    <div className="overflow-hidden h-screen w-full relative">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slide-${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          ></img>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* Right */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}
export default Caursel;
