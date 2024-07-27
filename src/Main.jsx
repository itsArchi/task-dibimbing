import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import FirstParallax from "./FirstParallax/FirstParallax.jsx";
import SecondParallax from "./SecondParallax/SecondParallax.jsx";
import ThirdParallax from "./ThirdParallax/ThirdParallax.jsx";
import FourthParallax from "./FourthParallax/FourthParallax.jsx";
import "./Main.css";

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
