import React from "react";
import "./HomePage.scss";
import MenuSectionComponent from "./MenuSection/MenuSectionComponent";
import AboutPage from "../AboutPage/AboutPage";
import ContactSection from "../../contactForm/ContactSection";
import TestimonialsSlider from "../../sliders/testimonialsSlider/TestimonialsSlider";
import HeaderSlider from "../../sliders/headerSlider/HeaderSlider";
import Checkout from "../../Checkout/Checkout";

const HomePage = () => {
  return (
    <div>
      <HeaderSlider />
      <AboutPage />
      <MenuSectionComponent />
      <TestimonialsSlider />
      <ContactSection />
    </div>
  );
};

export default HomePage;
