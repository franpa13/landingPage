import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { motion } from "framer-motion";
import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Form() {
  const [open, setOpen] = useState(false);
  const [openError ,setOpenError] = useState(false)
  const [form, setForm] = useState({ email: "", name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.email);
    
    if (form.email == "" || form.name == "" || form.message == "") {
        setOpenError(true)
        
    } else {
      setOpen(true);
      setForm({ email: "", name: "", message: "" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };
  return (
    <motion.section
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.4 }}
      className="  absolute top-32 md:top-64 left-0 right-0 dark:bg-gray-900 flex justify-center items-center flex-col "
    >
      <div className=" w-4/5 py-2 lg:py-4 px-4 mx-auto max-w-screen-md bg-white rounded-lg border-[2px] border-ligthYellow">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 ">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              value={form.email}
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              className="shadow-sm md:text-lg bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:text-white  dark:shadow-sm-light outline-none"
              placeholder="name@flowbite.com"
          
            />
          </div>
          <div>
            <label
              for="subject"
              className=" block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre
            </label>
            <input
              value={form.name}
              onChange={handleChange}
              name="name"
              type="text"
              id="subject"
              className="outline-none block p-3 w-full md:text-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Ingrese su nombre..."
             
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-400"
            >
              Su mensaje
            </label>
            <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
              id="message"
              rows="6"
              className="outline-none block p-2.5 w-full md:text-lg text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Por favor comentenos su inquietud o duda..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-black hover:text-white md:text-lg bg-ligthYellow hover:bg-ligthYellowText/80 focus:outline-none font-medium rounded-lg text-sm py-1 px-2 md:px-5 md:py-2.5 text-center flex flex-row-reverse justify-center gap-1 md:gap-3 items-center  me-2 mb-2"
          >
            <SendOutlinedIcon
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.5rem",
                },
              }}
            />
            Enviar Mensaje
          </button>
        </form>
      </div>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.4 }}
        className=" mt-12 gap-3 flex flex-col justify-center items-start "
      >
        <p className="text-lg md:text-2xl hover:text-ligthYellowText">
          Rimberio
        </p>
        <div className="hover:text-ligthYellowText flex gap-2">
          <PhoneEnabledOutlinedIcon
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.5rem",
              },
            }}
          ></PhoneEnabledOutlinedIcon>
          <span className="text-xs md:text-base">+54 387 440 559</span>
        </div>
        <div className="hover:text-ligthYellowText  flex gap-2">
          <EmailOutlinedIcon
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.5rem",
              },
            }}
          ></EmailOutlinedIcon>
          <a href="mailto:franpa619@gmail.com" className="text-xs md:text-base">
            franpa619@gmail.com
          </a>
        </div>
        <div></div>
      </motion.div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            bgcolor: "#1b1b1b",
            color: "#CDB587",
            fontWeight: "semibold",
          }}
        >
          Gracias por su mensaje , responderemos a la brevedad !!!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert
          onClose={handleCloseError}
          severity="error"
          variant="filled"
     
        >
        Se solicita llenar todos los campos !
        </Alert>
      </Snackbar>
    </motion.section>
  );
}
