import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { motion } from "framer-motion";
import FindUs from "./components/FindUs/FindUs";
import { CarouselHome } from "./components/Carousel/Carousel";
import DropDown from "./components/DropDownText/DropDownText";
import { GoodCoffe } from "./components/GoodCoffe/GoodCoffe";
import { About } from "./components/About/About";
import { OurCoffes } from "./components/OurCoffes/OurCoffes";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const imagesFirstCarousel = [
    {
      title: "rimberio",
      image: "/rimberiofirstimage.png",
    },
    {
      name: "barra Rimberio",
      image: "/rimberioBarra.jpg",
    },
    {
      name: "segunda barra del local",
      image: "/rimberiobarrados.jpg",
    },
  ];
  const imagesCoffes = [
    {
      title: "bar-coffe",
      image:
        "https://static.wixstatic.com/media/4599bb_67bf60ab23284650844a496f57bb3f09~mv2_d_5141_3639_s_4_2.jpg/v1/fill/w_430,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4599bb_67bf60ab23284650844a496f57bb3f09~mv2_d_5141_3639_s_4_2.jpg",
    },
    {
      name: "tea",
      image:
        "https://static.wixstatic.com/media/e3e4d8_76dd4091926247e4a463461c91d238e8~mv2.jpg/v1/fill/w_430,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e3e4d8_76dd4091926247e4a463461c91d238e8~mv2.jpg",
    },
    {
      name: "service-coffe",
      image:
        "https://static.wixstatic.com/media/e3e4d8_9eb47653aeb84c91868338d572fc85be~mv2.jpg/v1/fill/w_430,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e3e4d8_9eb47653aeb84c91868338d572fc85be~mv2.jpg",
    },
  ];
  const imagesPan = [
    {
      title: "pastel",
      image:
        "https://365obrador.com/wp-content/uploads/2024/07/tostadafrancesa_1x1_365-300x300.png",
    },
    {
      name: "medialunas",
      image: "./panaderia.png",
    },
    {
      name: "boveda",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20230426/pngtree-bakery-with-breads-in-wooden-boxes-image_2494124.jpg",
    },
  ];
  return (
    <section className="font-playfair">
      <Navbar></Navbar>
      <CarouselHome images={imagesFirstCarousel}></CarouselHome>
      <GoodCoffe></GoodCoffe>
      <Services></Services>
      <About ></About>
      <motion.section
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="flex justify-center items-center md:mt-24 m-2 md:m-0 "
      >
        <div className="flex justify-center sm:justify-between gap-2 md:gap-24 w-full md:w-[1000px] items-center mt-3">
          <motion.div
            initial={{
              x: window.innerWidth <= 800 ? 0 : -150,
              y: window.innerWidth <= 800 ? -150 : 0,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 1.4 }}
            className="flex flex-col-reverse w-full"
          >
            <CarouselHome images={imagesCoffes} coffe={true}></CarouselHome>
            <DropDown panaderia={true}></DropDown>
          </motion.div>

          <motion.div
            initial={{
              x: window.innerWidth <= 640 ? 0 : 150,
              y: window.innerWidth <= 640 ? 150 : 0,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 1.4 }}
            className="flex flex-col w-full"
          >
            <CarouselHome
              images={imagesPan}
              coffe={true}
              pan={true}
            ></CarouselHome>
            <DropDown cafeteria={true}></DropDown>
          </motion.div>
        </div>
      </motion.section>
      <OurCoffes></OurCoffes>
      <FindUs></FindUs>
      <Footer></Footer>
    </section>
  );
}

export default App;
