import React from "react";
import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";

export function CarouselHome({ images, coffe, pan }) {
  return (
    <Carousel
      indicators={false}
      animation="fade"
      duration={600}
      interval={2200}
      swipe={100}
      
      fullHeightHover={true}
      navButtonsAlwaysInvisible
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
