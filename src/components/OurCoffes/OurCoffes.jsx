import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const OurCoffes = () => {
  const [counterOn, setCounterOn] = useState(false);

  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 5], ["0%", "-20%"]);
  const contadores = [
    {
      image: (
        <CoffeeOutlinedIcon
          sx={{ fontWeight: "semibold", fontSize: "65px", color: "#d6d4ce" }}
        />
      ),
      title: "ORIGENES DE CAFE",
      max: 31,
    },
    {
      image: <CoffeeOutlinedIcon sx={{ fontSize: "65px", color: "#d6d4ce" }} />,
      title: "VARETIALES DE CAFÉ",
      max: 25,
    },
    {
      image: <CoffeeOutlinedIcon sx={{ fontSize: "65px", color: "#d6d4ce" }} />,
      title: "BLENDS",
      max: 14,
    },
  ];
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mt-12 overflow-hidden relative" 
    >
      <motion.img
        className="w-full h-[45vw] "
        src="https://www.stockpoint.co.jp/media/media-img/20180907_note_pic.png"
        alt=""
        style={{ y }}
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 ">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex justify-around w-full  gap-96 ">
            {counterOn &&
              contadores.map((contador) => {
                return (
                  <div className="flex flex-col justify-center items-center  gap-5 bg-opacity-90  rounded-sm text-5xl text-ligthYellow">
                    <div className=" flex justify-center p-3 border rounded-md border-ligthYellow-1 hover:bg-slate-600">
                      {contador.image}
                    </div>
                    <CountUp
                      end={contador.max}
                      duration={4.75}
                      separator=" "
                      decimals={0}
                      decimal=","
                      prefix="+"
                    />
                    <p className="text-center text-xl">{contador.title}</p>
                  </div>
                );
              })}
          </div>
        </ScrollTrigger>
      </div>
    </motion.div>
  );
};
