import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    scroll();
    // Second attempt after a short delay to override any browser/library scroll restoration
    const timeout = setTimeout(scroll, 10);
    return () => clearTimeout(timeout);
  }, [pathname]);


  return null;
};

export default ScrollToTop;
