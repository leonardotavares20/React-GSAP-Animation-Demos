import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";

const Timeline = () => {
  const [reversed, setReversed] = useState(false);
  const contextAnimation = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(".box", { rotation: 360 })
        .to(".box2", { x: 100, y: 200, rotation: 360 });
    }, contextAnimation);

    return () => context.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <>
      <div ref={contextAnimation}>
        <button onClick={() => setReversed(!reversed)}>
          {!reversed ? "Animacao" : "Animacao Reversa"}
        </button>
        <div className="box">Descocamento no eixo X</div>
        <div className="box box2">Timeline de rotacao</div>
      </div>
    </>
  );
};

export default Timeline;
