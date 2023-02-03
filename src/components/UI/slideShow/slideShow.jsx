import React from 'react';
import "./slideShow.css";

  let scrollInterval;
  const SlideShow = ({slides}) => {
    const [active, setActive] = React.useState(0);
    scrollInterval = null;

  React.useEffect(() => {
    scrollInterval = setTimeout(() => {
      setActive((active + 1) % slides.length);
    }, 2000);
    
    return () => clearTimeout(scrollInterval);
  });

  return (
    <div className="slides">
      {slides.map((item, index) => {
        const activeClass = active === index ? ' visible' : '';
        return React.cloneElement(item, {
          className: `slide${activeClass}`
        });
      })}
    </div>
  );
};

export default SlideShow;