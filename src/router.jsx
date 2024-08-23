import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Products from "./pages/Products/Products.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "/contact", element: <Contact /> },
]);
