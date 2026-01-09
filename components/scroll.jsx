import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // <-- fixed
  }, [pathname]);

  return null;
}

export default Scroll;
