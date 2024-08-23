import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export function Item({ item, coffe ,pan }) {
  return (
    <Paper>
      {coffe || pan ? (
        <img
          src={item.image}
          className="w-full md:w-full object-cover h-[58vw] md:h-[32vw] "
          alt={item.title}
        />
      ) : (
        <img
          src={item.image}
          className="w-full object-cover h-[58vw] sm:h-[45vw]"
          alt={item.title}
        />
      )}
    </Paper>
  );
}
