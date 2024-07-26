import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header/Header.jsx";
import "./Main.css";
import Footer from "./Footer/Footer.jsx";
import FirstParallax from "./FirstParallax/FirstParallax.jsx";
import FourthParallax from "./FourthParallax/FourthParallax.jsx";
import SecondParallax from "./SecondParallax/SecondParallax.jsx";
import ThirdParallax from "./ThirdParallax/ThirdParallax.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <FirstParallax />
    <SecondParallax />
    <ThirdParallax />
    <FourthParallax />
    <Footer />
  </React.StrictMode>
);
