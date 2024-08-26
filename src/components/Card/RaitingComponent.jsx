import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { styled } from "@mui/material/styles";
export default function RatingComponent({ contador }) {
  const [value, setValue] = React.useState(null);
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#b4a412",
    },
    "& .MuiRating-iconHover": {
      color: "#ffc400",
    },
    "& .MuiRating-iconEmpty": {
      color: "#d1d1d1",
    },
  });
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent:"start",
        gap: "6px",
      }}
    >
      <span className="text-xs md:text-sm flex flex-col-reverse">
        Rating del publico : {contador}
      </span>
      <div className="flex flex-wrap items-center ">
        <p className="text-base">Califica el producto : </p>
        <StyledRating defaultValue={2} name="customized-color">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            precision={0.5}
          />
        </StyledRating>
      </div>
    </Box>
  );
}
