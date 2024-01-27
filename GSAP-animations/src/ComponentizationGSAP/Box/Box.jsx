import "./Box.css";

const Box = ({ children, className, anim }) => {
  return (
    <>
      <div className={`box ${className}`} data-animate={anim}>
        {children}
      </div>
    </>
  );
};

export default Box;
