import React, { useState, useEffect, useRef } from "react";
import { TweenLite, Power4 } from "gsap";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const viewportRef = useRef<HTMLDivElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ro = new ResizeObserver(elements => {
      for (let elem of elements) {
        const crx = elem.contentRect;
        setHeight(crx.height);
      }
    });

    if (viewportRef.current) {
      ro.observe(viewportRef.current);
    }

    const handleScroll = () => {
      if (viewportRef.current) {
        TweenLite.to(viewportRef.current, 1, {
          y: -window.pageYOffset,
          ease: Power4.easeOut
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (viewportRef.current) {
        ro.unobserve(viewportRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="viewport" ref={viewportRef}>
        {children}
      </div>
      <div
        ref={fakeRef}
        style={{
          height: height
        }}
      />
    </>
  );
};

export default SmoothScroll;
