import Slider from 'react-slick';
import './GallerySlider.scss'

import restaurant from '../../../assets/images/elixir-restaurant.jpg'
import interior1 from '../../../assets/images/restaurant-interior-1.jpg'
import interior2 from '../../../assets/images/restaurant-interior-2.jpg'
import nightRest from '../../../assets/images/night-restaurant.webp'
import dayRest from '../../../assets/images/day-restaurant.jpg'
import foods from '../../../assets/images/foods.webp'
import { useState } from 'react';


function slidesToShow() {
    if (window.innerWidth < 500) {
        return 1
    } else if (window.innerWidth < 1000) {
        return 3
    }
    return 5
}
function isMobile() {
    if (window.innerWidth < 1000) {
        return true
    }

    return false
}
const settings = {
    infinite: true,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    autoplay: isMobile() ? false : true,
    speed: isMobile() ? 0 : 3000,
    autoplaySpeed: -1000,
    centerMode: true,
    cssEase: "linear",
    focusOnSelect: true,
    swipe: isMobile() ? true : false,
};

const setting2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    draggable: false,
    swipe: false,
    fade: true,
};

const sliders = [
    restaurant,
    interior1,
    interior2,
    nightRest,
    dayRest,
    foods,
]

function GallerySlider() {
    const [nav1, setNav1] = useState();

    return (
        <>
            <Slider {...setting2} className='aboutCarousel main' ref={(slider1) => setNav1(slider1)}>
                {sliders.map((slider) => {
                    return <div className='slider'>
                        <img src={slider} alt="restaurantImage" />
                    </div>
                })}
            </Slider>
            <Slider {...settings} className='aboutCarousel list' asNavFor={nav1} >
                {sliders.map((slider) => {
                    return <div className='slider'>
                        <img src={slider} alt="restaurantImage" />
                    </div>
                })}
            </Slider >
        </>
    )
}

export default GallerySlider