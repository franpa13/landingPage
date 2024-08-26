import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import Form from "../../components/Form/Form";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

export default function Contact() {
  return (
    <div className="font-playfair">
      <Navbar />
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className=" relative min-h-screen flex flex-col"
      >
        <div className="relative flex-grow">
          <img
            src="./localcoffetwo.jpg"
            className=" w-full md:w-full"
            alt=""
            style={{ filter: "brightness(25%)" }}
          />
          <div className="w-full flex justify-center flex-col items-center gap-1 md:gap-4 absolute text-center top-1 md:top-5 left-0 p-4 text-white z-10">
            <h1 className="md:text-[45px]">Contactanos</h1>
            <p className=" text-xs md:text-xl ndw-1/2 text-ligthYellow">
              ¡Escucharte es nuestra prioridad! Si tienes cualquier duda,
              sugerencia o comentario escríbenos y te contestaremos lo antes
              posible.
            </p>
          </div>
          <Form />
        </div>

        <div className="relative bottom-0 mt-[600px] sm:mt-[500px]  md:mt-[680px]  ">
          <FooterComponent />
        </div>
      </motion.div>
    </div>
  );
}
