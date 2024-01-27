import "./app.css";
import gsap from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

export function App() {
  const smootherRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smootherRef.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    const animacao = gsap.fromTo(
      ".box-c",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    ScrollTrigger.create({
      trigger: ".box-c",
      pin: true,
      animation: animacao,
      start: "start center",
      end: "+=1000",
      markers: true,
    });

    return () => {
      smootherRef.current.kill();
    };
  }, []);

  const goToBoxHandler = (e) => {
    smootherRef.current.scrollTo(".box-c", true, "center center");
  };

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <header class="header">
            <h1 class="title">ScrollSmoother</h1>
            <button onClick={goToBoxHandler} class="button">
              Jump to C
            </button>
          </header>
          <div class="box box-a" data-speed="clamp(0.5)">
            a
          </div>
          <div class="box box-b" data-speed="clamp(0.8)">
            b
          </div>
          <div class="box box-c" data-speed="1.5">
            c
          </div>
          <div class="line"></div>
        </div>
      </div>
    </>
  );
}
