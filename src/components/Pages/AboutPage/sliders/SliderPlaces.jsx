import SlickSlider from '../../../../assets/slickSlider/SlickSlider';
import './SliderPlaces.scss';
import about04 from '../../../../assets/images/about04.jpg'
import about05 from '../../../../assets/images/about05.jpg'
import about06 from '../../../../assets/images/about06.jpg'
function SliderPlaces() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,

        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,

        className: 'sliderPlaces',

        fade: true,
    };

    const sliders = [
        { type: 'image', src: about04 },
        { type: 'image', src: about05 },
        { type: 'image', src: about06 },
    ];

    return (
        <>
            <SlickSlider settings={settings} sliders={sliders} />
        </>
    );
}

export default SliderPlaces;
