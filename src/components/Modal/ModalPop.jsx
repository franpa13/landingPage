import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "8px",
  bgcolor: "white",
  border: "1px solid #ffffff",
  boxShadow: 24,
  p: 0,

  "@media (max-width: 768px)": {
    width: 300,
  },
  "@media (max-width: 480px)": {
    width: 350,
  },
};

export default function ModalPop({
  open,
  ubi,
  title,
  image,
  text,
  href,
  handleClose,
}) {
  console.log(ubi);

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-col justify-center font-playfair">
              <img className="w-full h-[300px] rounded-md" src={image} alt="" />

              <div className="p-1 gap-2 flex justify-center items-end text-xl ">
                <p>{ubi}</p>
                <a
                  className="hover:text-ligthYellowText"
                  target="_blank"
                  href={href}
                >
                  <PinDropOutlinedIcon />
                </a>
              </div>
              <span className="p-2">{text}</span>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
