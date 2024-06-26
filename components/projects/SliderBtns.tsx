import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface SliderBtn {
  containerStyles: string;
  btnStyles: string;
}

const SliderBtns = ({ containerStyles, btnStyles }: SliderBtn) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className="h-4 w-4" />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className="h-4 w-4"
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default SliderBtns;
