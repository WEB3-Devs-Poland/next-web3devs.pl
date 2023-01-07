import { PARTNERS } from '@components/sections/Partners/Partners.constants';
import React from 'react';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 8000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const PartnersRow: React.FunctionComponent = () => (
  <Carousel
    ssr
    arrows={false}
    infinite={true}
    autoPlay={true}
    showDots={false}
    swipeable={false}
    draggable={false}
    autoPlaySpeed={2500}
    responsive={responsive}
    keyBoardControl={false}
    className="flex w-full justify-center border-y-2 border-brand-purple1 p-4"
    itemClass="mx-8">
    {PARTNERS.map(({ name, CarouselLogo }) => (
      <div key={name} className="flex h-full">
        {/* eslint-disable-next-line max-len */}
        <CarouselLogo className="mx-auto cursor-pointer self-center opacity-75 duration-300 ease-in-out hover:opacity-100" />
      </div>
    ))}
  </Carousel>
);
