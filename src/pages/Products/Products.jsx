import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import ProductsSelected from "./ProductsSelected/ProductsSelected";

import { useProducts } from "../../services/useProducts";
import { motion } from "framer-motion";
import StaggeredDropDown from "../../components/Dropdown/StaggeredDropDown";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [coffes, setCoffes] = useState([]);
  const [bakeries, setBakeries] = useState([]);
  const [selected, setSelected] = useState("Todos");
  useEffect(() => {
    const cargarProductos = async () => {
      const data = await useProducts();
      if (data) {
        const allProducts = [...data.coffees, ...data.bakery];
        setProducts(allProducts);
        setCoffes(data.coffees);
        setBakeries(data.bakery);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div className="font-playfair">
      <Navbar></Navbar>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className=" flex flex-row-reverse items-center md:items-start p-2 bg-ligthYellow md:py-8"
      >
        <img
          className="w-1/3 md:w-1/4"
          src="https://estaticos.qdq.com/swdata/photos/203/203718935/0b9704470d2d40d9b0d703d323151da1.jpg"
          alt="products"
        />
        <div className="flex flex-col justify-center gap-3 items-start md:items-center px-3 md:px-12">
          <h1 className=" md:text-5xl">Nuestros Productos</h1>
          <p className="text-start md:mt-5 md:text-center text-xs md:text-2xl text-ligthYellowText">
            ¡Bienvenido al delicioso mundo de RIMBERIO! Cada día, horneamos
            nuestros productos con recetas tradicionales, ingredientes de la
            mejor calidad, y el tiempo justo para que cada pieza sea perfecta.
            Ven a disfrutar de nuestras delicias y acompáñalas con una buena
            taza de café.
          </p>
        </div>
      </motion.div>
      <section className="flex items-start mb-8 gap-6 flex-col px-2  md:px-12">
        <div>
          <StaggeredDropDown selected={selected} setSelected={setSelected} />
        </div>
        <ProductsSelected
          bakeries={bakeries}
          coffes={coffes}
          products={products}
          selected={selected}
        ></ProductsSelected>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
}
