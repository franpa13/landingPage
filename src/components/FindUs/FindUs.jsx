import React from "react";
import ModalPop from "../Modal/ModalPop";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";
export default function FindUs() {
  const [openModal, setOpenModal] = useState(null);

  const locales = [
    {
      title: "Jujuy",
      ubi: "Alvear 456 - S.S de Jujuy - Jujuy",
      image: "./localcoffe.jpg",
      text: "Ubicado en la provincia de Jujuy, es nuestra principal residencia donde encontrarás los mejores sabores artesanales de la región.",
      href: "https://www.google.com.ar/maps/place/FranKini/@-24.2653321,-65.224704,5673m/data=!3m1!1e3!4m10!1m2!2m1!1scafeteria!3m6!1s0x941b07a63c757f31:0xd9747c6f880e165c!8m2!3d-24.2549726!4d-65.2033586!15sCgljYWZldGVyaWFaCyIJY2FmZXRlcmlhkgEEY2FmZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSQ2FFeGxURFJSUlJBQuABAA!16s%2Fg%2F11s7c1xs2r?entry=ttu",
    },
    {
      title: "Tucumán",
      ubi: "San Martin 56 - San Miguel de Tucumán - Tucumán",
      image: "https://wallpapercave.com/wp/wp2352852.jpg",
      text: "En el corazón de Tucumán, este local ofrece una experiencia única con productos frescos y de alta calidad.",
      href: "https://www.google.com.ar/maps/place/San+Mart%C3%ADn+56,+T4000+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n,+Argentina/@-26.824142,-65.2188574,17z/data=!3m1!4b1!4m6!3m5!1s0x94225c41da408839:0x1b6d55d0dbf3e1ed!8m2!3d-26.824142!4d-65.2166687!16s%2Fg%2F11c1vt9nnm?entry=ttu",
    },
    {
      title: "Salta",
      ubi: "Av. Belgrano 345 - Salta - Salta",
      image:
        "https://i.pinimg.com/originals/0a/ce/c4/0acec48b27d435e1b6a528e5d823acf2.png",
      text: "Con un ambiente acogedor en la histórica ciudad de Salta, este local es ideal para disfrutar de un café excepcional.",
      href: "https://www.google.com.ar/maps/place/Av.+Belgrano+345,+A4400+Salta,+Argentina/@-24.7878703,-65.4124501,17z/data=!3m1!4b1!4m6!3m5!1s0x941bc2449e67c45f:0x7b9092c2bcfd9cf6!8m2!3d-24.7878703!4d-65.4102614!16s%2Fg%2F11c14p8vtt?entry=ttu",
    },
    {
      title: "Mendoza",
      ubi: "Mitre 890 - Mendoza - Mendoza",
      image:
        "https://www.franciscosegarra.com/wp-content/uploads/2019/05/interiorismo-y-decoracion-cafeteria-charlotte-1.jpg",
      text: "En Mendoza, nuestro local te invita a disfrutar de una experiencia gourmet en un ambiente moderno y elegante.",
      href: "https://www.google.com.ar/maps/place/Av.+Bartolom%C3%A9+Mitre+890,+M5500+Mendoza,+Argentina/@-32.8924215,-68.8385272,17z/data=!3m1!4b1!4m6!3m5!1s0x967d857b60f33241:0x7b6d9230412995c3!8m2!3d-32.8924215!4d-68.8363385!16s%2Fg%2F11rld2b9sy?entry=ttu",
    },
  ];
  const handleOpen = (index) => setOpenModal(index);
  const handleClose = () => setOpenModal(null);
  return (
    <div
      id="place"
      className=" md:mt-5 flex items-center flex-col md:flex-row-reverse gap-0 md:gap-8  md:justify-center md:items-center"
    >
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.85 }}
        className="w-full md:w-1/2 "
        src="https://doccafe.com.ar/wp-content/uploads/2023/12/Diseno-sin-titulo-15.png"
        alt=""
      />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.85 }}
        className="md:ml-40 flex flex-col gap-2 md:gap-10 items-center   justify-center mt-2 md:mt-0 md:w-1/2 "
      >
        <h1 className="text-black text-2xl md:text-5xl md:mt-0 text-start w-full font-semibold">
          Encontranos
        </h1>
        <div className=" w-full md:mt-2 flex justify-start md:gap-10 flex-col items-start">
          <div className="flex flex-col gap-0 md:gap-0">
            <span className="text-xl md:text-3xl  text-ligthYellowText">
              Horarios
            </span>
            <p className="text-xl md:text-2xl">Lu -Vi: 8:00hs – 20:30hs</p>
            <p className="text-xl md:text-2xl">
              Findes y feriados: 9:00hs – 20:30hs
            </p>
          </div>

          <div className="flex w-full mt-3 md:mt-0  justify-between  md:flex-col md:gap-10">
            <div>
              <span className="text-xl md:text-3xl  text-ligthYellowText">
                Locales
              </span>
              {locales.map((local, index) => {
                return (
                  <div className="cursor-pointer" key={index}>
                    <p
                      className="cursor-pointer text-xl md:text-2xl hover:text-ligthYellowText"
                      onClick={() => handleOpen(index)}
                    >
                      {local.title}
                    </p>
                    {openModal === index && (
                      <ModalPop
                        open={openModal === index}
                        ubi={local.ubi}
                        title={local.title}
                        image={local.image}
                        text={local.text}
                        href={local.href}
                        handleClose={handleClose}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl md:text-3xl  text-ligthYellowText">
                Redes Sociales
              </span>
              <div className="flex gap-6">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/francisco-paredes-354a2b26b/"
                >
                  <FaFacebookSquare className="text-[25px] sm:text-[30px] md:text-[40px]" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/francisco-paredes-354a2b26b/"
                >
                  <FaInstagramSquare className="text-[25px] sm:text-[30px] md:text-[40px]" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/francisco-paredes-354a2b26b/"
                >
                  <FaTiktok className="text-[25px] sm:text-[30px] md:text-[40px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
