import React from "react";
import "./HomePage.scss";
import MenuSectionComponent from "./MenuSection/MenuSectionComponent";
import AboutPage from "../AboutPage/AboutPage";
import ContactSection from "../../contactForm/ContactSection";
import TestimonialsSlider from "../../sliders/testimonialsSlider/TestimonialsSlider";
import HeaderSlider from "../../sliders/headerSlider/HeaderSlider";

const HomePage = () => {
  return (
    <div>
      <HeaderSlider />
      <h1>Home Page</h1>
      <AboutPage />
      <MenuSectionComponent />
      <TestimonialsSlider />
      <ContactSection/>
    </div>
  );
};

export default HomePage;
