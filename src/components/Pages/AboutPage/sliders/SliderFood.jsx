import SlickSlider from '../../../../assets/slickSlider/SlickSlider';
import './SliderFood.scss';
import about01 from '../../../../assets/images/about01.png'
import about02 from '../../../../assets/images/about02.png'
import about03 from '../../../../assets/images/about03.png'

function SliderFood() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,

        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

        className: 'sliderFood',
        fade: true,
    };

    const sliders = [
        { type: 'image', src: about01 },
        { type: 'image', src: about02 },
        { type: 'image', src: about03 },
    ];

    return (
        <>
            <SlickSlider settings={settings} sliders={sliders} />
        </>
    );
}

export default SliderFood;
