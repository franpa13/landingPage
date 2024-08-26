import React from "react";
import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";

export function CarouselHome({ images, coffe, pan }) {
  return (
    <Carousel
      animation={coffe ? "fade" : "slide"}
      duration={1000}
      interval={2000}
      swipe={1500}
      fullHeightHover={true}
      IndicatorIcon={false}
       indicators={false}
      sx={{
        "& .MuiCarousel-indicators": {
          display: "none !important",
        },
        "& .MuiCarousel-item": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      {images.map((item, i) => (
        <Item key={i} item={item} coffe={coffe} />
      ))}
    </Carousel>
  );
}
