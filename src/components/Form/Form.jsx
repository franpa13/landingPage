import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function Form() {
  return ( 
    <section class="  absolute top-32 md:top-64 left-0 right-0 dark:bg-gray-900 ">
      <div class=" w-4/5 py-2 lg:py-4 px-4 mx-auto max-w-screen-md bg-white rounded-lg border-[2px] border-ligthYellow">
        <form  class="space-y-4 md:space-y-6 ">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm text-sm md:text-lg bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:text-white  dark:shadow-sm-light outline-none"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class=" block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre
            </label>
            <input
              type="text"
              id="subject"
              class="outline-none block p-3 w-full md:text-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Ingrese su nombre..."
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-400"
            >
             Su mensaje
            </label>
            <textarea
              id="message"
              rows="6"
              class="outline-none block p-2.5 w-full md:text-lg text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Por favor comentenos su inquietud o duda..."
            ></textarea>
          </div>
          <button
            type="button"
            class="text-black hover:text-white md:text-lg bg-ligthYellow hover:bg-ligthYellowText/80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex flex-row-reverse justify-center gap-3 items-center  me-2 mb-2"
          >
            <SendOutlinedIcon></SendOutlinedIcon>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
