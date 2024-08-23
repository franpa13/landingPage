import React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
const Services = () => {
  const services = [
    {
      title: "LAS MARCAS MÁS POPULARES",
      desc: "Una gran variedad de marcas y sabores.",
      image:
        "https://www.cafeteria.bg/wp-content/uploads/2021/02/Products-150x150.png",
    },
    {
      title: "CONSÚLTANOS",
      desc: "+54 3889446541 | franpa619@gmail.com",
      image:
        "https://www.cafeteria.bg/wp-content/uploads/2021/02/consultancy-150x150.png",
    },
    {
      title: "PAGOS SEGUROS",
      desc: "Paga de forma segura con tarjeta de crédito o débito.",
      image:
        "https://www.cafeteria.bg/wp-content/uploads/2021/02/Scure-payments-150x150.png",
    },
    {
      title: "ENVÍO GRATUITO",
      desc: "Envío gratuito para pedidos superiores a 5000 pesos.",
      image:
        "https://www.cafeteria.bg/wp-content/uploads/2021/02/Free-delivery-150x150.png",
    },
  ];
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className=" flex flex-col flex-wrap items-center md:flex-row justify-around gap-4 md:items-end bg-ligthYellow mt-1 md:mt-10 pb-8"
    >
      {services.map((service, index) => (
        <div className="flex flex-col justify-start items-center text-center ">
          <img
            className={`${
              service.title == "PAGOS SEGUROS"
                ? "w-1/4 md:w-2/5"
                : "w-1/3 md:w-1/2"
            } `}
            key={index}
            src={service.image}
            alt={service.title}
          />
          <p className="text-orange-950 font-medium text-xs md:text-base">{service.title}</p>
          <p className="text-gray-800 text-xs md:text-base">{service.desc}</p>
        </div>
      ))}
    </motion.div>
  );
};
export default Services