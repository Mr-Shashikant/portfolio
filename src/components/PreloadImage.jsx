import { Helmet } from "react-helmet";
import heroImg from "../assets/hero_img.webp"

const PreloadImage = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heroImg} />
      </Helmet>
      <img src={heroImg} alt="hero image" className="h-100 rounded-lg grayscale hover:grayscale-0 transition-all duration-300 mt-5 mb-2" />
    </>
  );
};

export default PreloadImage;
