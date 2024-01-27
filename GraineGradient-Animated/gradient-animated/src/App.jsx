import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      const gradientElement = document.querySelector(".gradient");

      console.log(gradientElement)

      if (gradientElement) {
        gradientElement.style.background = `linear-gradient(
          to top left,
          rgba(37, 37, 255, 0.492),
          rgba(130, 252, 78, 0.733)
        ),
        radial-gradient(
            at ${mouseX} ${mouseY},
            rgba(255, 255, 255, 0.5),
            rgba(0, 0, 0, 0.5)
          )
          url("data:image/svg+xml,%3Csvg viewBox='0 0 362 362' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.16' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gradientRef]);

  return (
    <>
      <div className="gradient" ref={gradientRef}></div>
    </>
  );
}

export default App;
