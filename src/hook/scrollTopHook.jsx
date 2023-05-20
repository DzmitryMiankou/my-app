import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "instant",
    });
  }, []);
  return null;
};

export default ScrollToTop;
