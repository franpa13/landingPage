import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import { Link } from "react-router-dom";
const DropDown = ({ panaderia, cafeteria }) => {
  return (
    <div className="font-playfair flex text-black h-[150px] md:h-[350px] justify-center mb-12 md:mb-0 mt-3 px-3 md:py-12">
      {cafeteria ? (
        <FlyoutLink
          panaderia={panaderia}
          cafateria={cafeteria}
          href="#"
          FlyoutContent={PricingContent}
        >
          {cafeteria && (
            <CoffeeMakerIcon
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "30px",
                  lg: "35px",
                  xl: "40px",
                },
              }}
            ></CoffeeMakerIcon>
          )}
          Cafeteria
        </FlyoutLink>
      ) : (
        <FlyoutLink
          panaderia={panaderia}
          cafateria={cafeteria}
          href="#"
          FlyoutContent={PricingContent}
        >
          {" "}
          {panaderia && (
            <BakeryDiningIcon
              sx={{
                fontSize: {
                  xs: "21px",

                  md: "32px",
                  lg: "38px",
                  xl: "40px",
                },
              }}
            ></BakeryDiningIcon>
          )}
          Panaderia
        </FlyoutLink>
      )}
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
  cafateria,
  panaderia,
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        className="flex gap-[1px] md:gap-2 items-start flex-row-reverse  justify-end mt-2 relative text-black text-xs md:text-2xl"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-ligthYellow transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent cafeteria={cafateria} panaderia={panaderia} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({ cafeteria, panaderia }) => {
  return (
    <div className="w-[190px] md:w-64 p-2  bg-white md:p-6 shadow-xl">
      <div className="mb-3 space-y-3 text-xs md:text-base">
        {cafeteria ? (
          <p>
            Descubre nuestra selección de cafés premium, preparados con granos
            de la más alta calidad para ofrecerte una experiencia inigualable en
            cada sorbo.
          </p>
        ) : (
          <p>
            Disfruta de nuestras deliciosas opciones de panadería, elaboradas
            con ingredientes frescos y técnicas tradicionales para garantizar un
            sabor excepcional en cada bocado.
          </p>
        )}
      </div>
      <Link to="/products">
        <button className="w-full text-xs md:text-base rounded-lg border-[2px] border-neutral-950 px-1 py-1 font-semibold transition-colors hover:bg-ligthYellow hover:text-black">
          Ver Productos
        </button>
      </Link>
    </div>
  );
};

export default DropDown;
