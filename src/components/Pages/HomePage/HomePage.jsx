import React from 'react';
import './HomePage.scss';
import MenuSectionComponent from './MenuSection/MenuSectionComponent';
import AboutPage from '../AboutPage/AboutPage';
import ContactSection from '../../contactForm/ContactSection';
import TestimonialsSlider from '../../sliders/testimonialsSlider/TestimonialsSlider';
import HeaderSlider from '../../sliders/headerSlider/HeaderSlider';
import Map from '../../Map/Map';

const HomePage = () => {
    return (
        <div className='home'>
            <HeaderSlider />
            <AboutPage />
            <MenuSectionComponent />
            <TestimonialsSlider />
            <ContactSection />
            <Map centerCoordinates={[43.22068, 27.934985]} />
        </div>
    );
};

export default HomePage;
