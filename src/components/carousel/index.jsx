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
          <div className="embla__content">
            <img className="embla__slide__img" src={image2} alt="이미지2" />
            <div className="embla__slide__text">
              당신이 원하는 디자인 그 무엇이든
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__content">
            <img className="embla__slide__img" src={image1} alt="이미지1" />
            <div className="embla__slide__text">없는 게 없다!</div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__content">
            <img className="embla__slide__img" src={image3} alt="이미지3" />
            <div className="embla__slide__text">신선한 식품!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
