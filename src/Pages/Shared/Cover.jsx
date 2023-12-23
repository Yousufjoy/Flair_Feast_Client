import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -55, max: 55 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              "Savor the flavor of innovation – where every click on our
              restaurant website opens the door to a culinary journey that
              transcends taste, blending technology and gastronomy for an
              unforgettable dining experience."
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
