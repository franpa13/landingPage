import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@mui/material";

export const GoodCoffe = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Determina si la pantalla es pequeña o mediana
  const isSmallScreen = useMediaQuery("(max-width: 1024px)"); // Puedes ajustar este valor según tus necesidades

  // Configuración de posiciones para pantallas grandes
  const beanPositionsLarge = [
    { top: "15%", left: "50%", rotate: 4 },
    { top: "10%", left: "80%", rotate: -14 },
    { top: "80%", left: "54%", rotate: 31 },
    { top: "10%", left: "28%", rotate: -25 },
    { top: "60%", left: "75%", rotate: 45 },
    { top: "65%", left: "26%", rotate: -35 },
    { top: "1%", left: "0%", rotate: -15 },
    { top: "92%", left: "2%", rotate: -80 },
  ];

  // Configuración de posiciones para pantallas pequeñas y medianas
  const beanPositionsSmall = [
    { top: "80%", left: "50%", rotate: 4 },
    { top: "60%", left: "85%", rotate: -14 },
    { top: "12%", left: "54%", rotate: 31 },
    { top: "50%", left: "28%", rotate: -25 },
    { top: "3%", left: "75%", rotate: 45 },
    { top: "25%", left: "26%", rotate: -35 },
    { top: "50%", left: "0%", rotate: -15 },
    { top: "10%", left: "2%", rotate: -80 },
  ];

  const beanPositions = isSmallScreen ? beanPositionsSmall : beanPositionsLarge;

  return (
    <section
      id="launch-schedule"
      className="px-4 py-7 mt-1 md:mt-8 text-black flex justify-center items-center flex-row-reverse gap-6 relative"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="md:mt-6 text-xs text-center font-medium md:text-3xl"
      >
        "UN BUEN CAFÉ ES UNA SINFONÍA QUE REFLEJA LA CALIDAD DE CADA PASO EN SU
        PROCESO."
      </motion.h1>

      <motion.img
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        src="./coffe.png"
        className="w-1/5 md:w-1/5 rounded-lg md:mt-2 relative z-10"
        alt="Coffe"
        style={{ rotate }}
      />

      {beanPositions.map((pos, i) => (
        <motion.img
          key={i}
          src="./coffebean.png"
          className="absolute w-[8px] md:w-[45px] z-0"
          alt="Coffe Bean"
          initial={
            isSmallScreen
              ? { y: 50, opacity: 0, rotate: 0 }
              : { x: 100, opacity: 0, rotate: 0 }
          }
          whileInView={{ y: 0, x:0 , opacity: 1, rotate: pos.rotate }}
          transition={{
            ease: "backIn",
            duration: 0.75,
            delay: i * 0.1,
          }}
          style={{
            top: pos.top,
            left: pos.left,
          }}
        />
      ))}
    </section>
  );
};
