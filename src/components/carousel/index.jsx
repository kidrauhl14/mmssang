import React, { useEffect } from "react";
import './index.scss';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from "../../assets/image3.jpg";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img className="embla__slide__img" src={image1} alt="이미지1" />
        </div>
        <div className="embla__slide">
          <img className="embla__slide__img" src={image2} alt="이미지2" />
        </div>
        <div className="embla__slide">
          <img className="embla__slide__img" src={image3} alt="이미지3" />
        </div>
      </div>
    </div>
  );
};
