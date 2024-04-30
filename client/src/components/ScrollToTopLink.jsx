/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Custom Link component to scroll to top on click
const ScrollToTopLink = ({ to = "/", children, classes = "" }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <Link
      to={to}
      onClick={scrollToTop}
      preventScrollReset={true}
      // reloadDocument={true}
      className={classes}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
