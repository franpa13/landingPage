import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import RatingComponent from "./RaitingComponent";
const Card = ({ prod }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="w-full md:w-1/4 group relative block bg-black"
    >
      <img
        alt=""
        src={prod.image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        {prod.category == "coffe" ? (
          <p className="text-sm font-medium uppercase tracking-widest text-white">
            cafeteria
          </p>
        ) : (
          <p className="text-sm font-medium uppercase tracking-widest  text-white">
            panaderia
          </p>
        )}

        <p className="text-xl font-bold text-white sm:text-2xl">{prod.name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              <RatingComponent contador={prod.rating}></RatingComponent>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
