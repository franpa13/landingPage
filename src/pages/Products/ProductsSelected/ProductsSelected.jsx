import React from "react";
import Card from "../../../components/Card/Card";
import { motion, useAnimation } from "framer-motion";
import { Skeleton } from "@mui/material";

export default function ProductsSelected({
  products,
  selected,
  coffes,
  bakeries,
  loading,
}) {
  const controls = useAnimation();
  console.log(loading, "este es loading");

  React.useEffect(() => {
    controls
      .start({
        opacity: 0,
        transition: { duration: 0.2 },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.2 },
        });
      });
  }, [selected, controls]);
  const fakeProducts = Array.from({ length: 15 });
  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-between gap-12"
      animate={controls}
      initial={{ opacity: 1 }}
    >
      {loading
        ? fakeProducts.map((_, index) => {
            return <Skeleton
            key={index}
            variant="rectangular"
            width={300}
            height={300}
          />;

            
          })
        : selected === "Todos"
        ? products.map((prod) => <Card key={prod.id} prod={prod} />)
        : selected === "Pasteleria"
        ? bakeries.map((prod) => <Card key={prod.id} prod={prod} />)
        : coffes.map((prod) => <Card key={prod.id} prod={prod} />)}
    </motion.div>
  );
}
