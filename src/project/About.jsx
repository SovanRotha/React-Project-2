import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const images = [
  "https://i.pinimg.com/1200x/a9/86/b7/a986b74c0f5afa489f2b96646f6bdadf.jpg",
  "https://i.pinimg.com/1200x/03/cf/74/03cf7419e7fa8c3983938d6760ae2652.jpg",
  "https://i.pinimg.com/1200x/29/3a/52/293a528d8963f23abd99aaadf22beff3.jpg",
];

function About() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="slide"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}

export default About;
