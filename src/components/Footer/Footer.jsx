import React from "react";

export default function Footer() {
  return (
    <footer class="bg-bgNavbar mt-6 shadow font-playfair text-white dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-3 md:py-8 text-white">
        <div class="sm:flex sm:items-center sm:justify-between text-white md:flex-row-reverse">
          <a
            href="/"
            class="flex items-center flex-row-reverse  mb-4 sm:mb-0 "
          >
            <img src="./coffeshop.png" class="w-1/12 md:w-[60px]" alt="Logo" />
            <span className=" text-xl font-semibold  dark:text-white">
              Rimberio
            </span>
          </a>
          <ul class="text-xs flex flex-wrap md:justify-centeri w-full items-center mb-6 md:text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#us" class="hover:underline me-4 md:me-6">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Politicas de privacidad
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licencias
              </a>
            </li>
            <li>
              <a href="contact" class="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-xs md:text-sm text-white text-center sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" class="hover:underline">
            Rimberio™
          </a>
          . Todos los derechos resevados.
        </span>
      </div>
    </footer>
  );
}
