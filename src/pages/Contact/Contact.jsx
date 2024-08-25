import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

export default function Contact() {
  return (
    <div className="font-playfair relative min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-grow">
        <img
          src="./localcoffetwo.jpg"
          className=" w-full md:w-full"
          alt=""
          style={{ filter: "brightness(25%)" }}
        />
        <div className="w-full flex justify-center flex-col items-center gap-1 md:gap-4 absolute text-center top-1 md:top-5 left-0 p-4 text-white z-10">
          <h1 className="md:text-[45px]">Contactanos</h1>
          <p className=" text-xs md:text-xl w-1/2 text-ligthYellow">
            ¡Escucharte es nuestra prioridad! Si tienes cualquier duda,
            sugerencia o comentario escríbenos y te contestaremos lo antes
            posible.
          </p>
        </div>
        <Form />
      </div>

      <div className="relative bottom-0 mt-[450px] md:mt-[400px] lg:mt-[600px] " >
        <Footer />
      </div>
    </div>
  );
}
