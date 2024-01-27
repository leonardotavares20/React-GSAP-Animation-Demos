import { useEffect, useRef } from "react";
import "./InitialConcepts.css";
import { gsap } from "gsap";

function InitialConcepts() {
  const boxRef = useRef();
  const animationContext = useRef();
  const circle = useRef();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#a452f6", scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#18f321", scale: 1 });
  };

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "360", duration: 2 });

    let contextAnimation = gsap.context(() => {
      gsap.to(".boxRotation", { rotation: "360" });

      gsap.to(circle.current, { rotation: "360" });
    }, animationContext);

    return () => contextAnimation.revert();
  }, []);

  return (
    <>
      <div ref={animationContext}>
        <div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="div-hover"
        >
          Passe o mouse pra uma animacao simples
        </div>
        <div ref={boxRef} className="div-hover">
          Item com uma ref
        </div>
        <div ref={circle} className="div-hover circle">
          Circle
        </div>
        <div className="div-hover boxRotation">Context Animation</div>
      </div>
    </>
  );
}

export default InitialConcepts;
