import React from "react";
import Card from "../../../components/Card/Card";
import { motion, useAnimation } from "framer-motion";

export default function ProductsSelected({
  products,
  selected,
  coffes,
  bakeries,
}) {
  const controls = useAnimation();


  React.useEffect(() => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.2 },
    }).then(() => {
      controls.start({
        opacity: 1,
        transition: { duration: 0.2 },
      });
    });
  }, [selected, controls]);

  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-between gap-12"
      animate={controls}
      initial={{ opacity: 1 }}
    >
      {selected === "Todos"
        ? products.map((prod) => <Card key={prod.id} prod={prod} />)
        : selected === "Pasteleria"
        ? bakeries.map((prod) => <Card key={prod.id} prod={prod} />)
        : coffes.map((prod) => <Card key={prod.id} prod={prod} />)}
    </motion.div>
  );
}
