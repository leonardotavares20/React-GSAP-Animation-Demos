import gsap from "gsap";
import { useEffect, useRef } from "react";
import Box from "./Box/Box";

const ComponentizationGSAP = () => {
  const allBoxes = useRef();

  useEffect(() => {
    const contextAnimation = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to("[data-animate='move']", {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to("[data-animate='hover']", {
        scale: 1.2,
        background: "red",
        duration: 3,
      });

      gsap.set(".dont-animate", {
        backgroundColor: "red",
      });
    }, allBoxes); // <- Escopo onde a animacao vai acontecer

    return () => contextAnimation.revert();
  }, []);

  return (
    <>
      <div ref={allBoxes}>
        <Box anim={"move"}>Box</Box>
        <Box className="dont-animate">Dont animate</Box>
        <Box anim={"rotate"}>Box</Box>
      </div>
    </>
  );
};

export default ComponentizationGSAP;
