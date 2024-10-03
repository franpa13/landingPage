import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ProductsSelected from "./ProductsSelected/ProductsSelected";
import { useProductsBakery } from "../../services/useProducts";
import { useProductsCoffes } from "../../services/useProducts";
import { motion } from "framer-motion";
import StaggeredDropDown from "../../components/Dropdown/StaggeredDropDown";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
export default function Products() {
  const [loading , setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [coffes, setCoffes] = useState([]);
  const [bakeries, setBakeries] = useState([]);
  const [selected, setSelected] = useState("Todos");
  useEffect(() => {
    const cargarProductos = async () => {
      const dataCoffe = await useProductsCoffes();
      const dataBakery = await useProductsBakery();
      if (dataCoffe && dataBakery) {
        const allProducts = [...dataCoffe, ...dataBakery];
        setProducts(allProducts);
        setCoffes(dataCoffe);
        setBakeries(dataBakery);
      }
      setLoading(false);
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
        className=" flex flex-row-reverse items-center md:items-start p-2 bg-ligthYellow md:py-4"
      >
        <img
          className="w-1/3 md:w-1/5 rounded-md"
          src="https://estaticos.qdq.com/swdata/photos/203/203718935/0b9704470d2d40d9b0d703d323151da1.jpg"
          alt="products"
        />
        <div className="flex flex-col justify-center gap-3 items-start md:items-center px-3 md:px-12">
          <h1 className=" md:text-4xl text-ligthYellowText">Nuestros Productos</h1>
          <p className="text-start md:mt-5 md:text-center text-xs md:text-xl font-medium text-black">
            ¡Bienvenido al delicioso mundo de RIMBERIO! Cada día, horneamos
            nuestros productos con recetas tradicionales, ingredientes de la
            mejor calidad, y el tiempo justo para que cada pieza sea perfecta.
            Ven a disfrutar de nuestras delicias y acompáñalas con una buena
            taza de café.
          </p>
        </div>
      </motion.div>
      <section className="flex items-start mb-8 gap-6 flex-col px-2  md:px-12">
        <div className="flex justify-between items-end w-full ">
          <StaggeredDropDown selected={selected} setSelected={setSelected} />
          <span className="text-sm md:text-xl font-semibold flex justify-center items-center md:items-end gap-1 md:gap-3"><StarHalfIcon></StarHalfIcon> Califica nuestros productos !<StarHalfIcon></StarHalfIcon> </span>
        </div>
        <ProductsSelected
          bakeries={bakeries}
          coffes={coffes}
          products={products}
          selected={selected}
          loading={loading}
        ></ProductsSelected>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
}
