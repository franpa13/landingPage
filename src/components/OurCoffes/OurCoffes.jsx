import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const OurCoffes = () => {
  const [counterOn, setCounterOn] = useState(false);

  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 5], ["0%", "-20%"]);
  const contadores = [
    {
      image: (
        <div className="flex justify-center p-1 md:p-3 border text-white rounded-md border-ligthYellow-[1px] hover:bg-ligthYellow hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
          <StoreOutlinedIcon
            sx={{
              fontWeight: "semibold",
              fontSize: { xs: "16px", sm: "32px", md: "40px" }, // Tamaño para diferentes pantallas
            }}
          />
        </div>
      ),
      title: "LOCALES EN EL PAIS",
      max: 44,
    },
    {
      image: (
        <div className="flex justify-center p-1 md:p-3 border text-white rounded-md border-ligthYellow-[1px] hover:bg-ligthYellow hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
          <CoffeeOutlinedIcon
            sx={{
              fontSize: { xs: "16px", sm: "32px", md: "40px" }, // Tamaño para diferentes pantallas
            }}
          />
        </div>
      ),
      title: "ORIGENES DE CAFE",
      max: 34,
    },
    {
      image: (
        <div className="flex justify-center p-1 md:p-3 border text-white rounded-md border-ligthYellow-[1px] hover:bg-ligthYellow hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
          <Groups2OutlinedIcon
            sx={{
              fontSize: { xs: "16px", sm: "32px", md: "40px" },

            }}
          />
        </div>
      ),
      title: "CLIENTES SATISFECHOS",
      max: 1000,
    },
  ];

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      className="flex justify-center items-center mt-12 overflow-hidden relative"
    >
      <motion.img
        className="w-full h-full object-cover opacity-95"
        src="./localcoffe.jpg"
        alt="local"
        style={{ y }}
      />
      <div className=" absolute top-0 bottom-2 md:top-2 left-0 right-0 md:bottom-8 inset-20 bg-black opacity-70"></div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 ">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex justify-around w-full gap-12 sm:gap-32  lg:gap-72">
            {counterOn &&
              contadores.map((contador, index) => {
                const cont = 0.55 + index;
                return (
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: cont }}
                    className="flex flex-col justify-center items-center gap-0 md:gap-5 bg-opacity-90  rounded-sm text-4xl text-ligthYellow"
                  >
                    {contador.image}

                    <CountUp
                      end={contador.max}
                      duration={4.75}
                      separator=" "
                      decimals={0}
                      decimal=","
                      prefix="+"
                      className="mt-2 text-base md:font-[280px] md:text-[35px] "
                    />
                    <span className=" text-center text-[8px] md:text-xl text-xs md:font-semibold">
                      {contador.title}
                    </span>
                  </motion.div>
                );
              })}
          </div>
        </ScrollTrigger>
      </div>
    </motion.div>
  );
};
