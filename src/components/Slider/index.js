import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Slide from '../Slide';
import { Box, BoxWrapper, ButtonNext, ButtonPrev } from './styled';

export default function Slider({ items }) {
  const [sliderAtual, setSliderAtual] = useState(0);

  function nextSlide() {
    if (sliderAtual >= items.length - 1) return;
    setSliderAtual(sliderAtual + 1);
  }

  function prevSlide() {
    if (sliderAtual <= 0) return;
    setSliderAtual(sliderAtual - 1);
  }

  return (
    <Box>
      <ButtonPrev onClick={() => prevSlide()}>
        <FaArrowLeft size={22} color="red" />
      </ButtonPrev>

      <BoxWrapper
        color="green"
        style={{ transform: `translateX(${-sliderAtual * 100}%)` }}
      >
        {items.map((item, id) =>
          !item.urlToImage ? <></> : <Slide noticia={item} />
        )}
      </BoxWrapper>

      <ButtonNext onClick={nextSlide}>
        <FaArrowRight size={22} color="red" />
      </ButtonNext>
    </Box>
  );
}
