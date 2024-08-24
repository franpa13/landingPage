import React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
export const About = () => {
  return (
    <div className="flex justify-center my-12 flex-col items-center ">
      <motion.img
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="w-1/2 md:w-2/5"
        src="/panes.jpg"
        alt=""
      />
      <p className="md:w-2/3 text-xs text-center font-medium  md:text-2xl">
        Somos una linea de restaurantes especializado en cafetería y panadería
        fundada en S.S de Jujuy, con más de 21 años de experiencia en el sector
        de la gastronomia.
      </p>
    </div>
  );
};
