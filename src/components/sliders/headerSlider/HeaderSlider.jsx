import { useEffect, useRef, useState } from 'react';
import SlickSlider from '../../../assets/slickSlider/SlickSlider';
import { PrevArrow, NextArrow } from './arrows/Arrows';
import styles from './HeaderSlider.module.scss';
import { CSSTransition } from 'react-transition-group';
import React from 'react';
import header1 from '../../../assets/images/header_slider01.jpg'
import header2 from '../../../assets/images/header_slider02.jpg'
import header3 from '../../../assets/images/header_slider03.jpg'
import separator from '../../../assets/images/slide-separator.png'
import downArrow from '../../../assets/images/down-arrow.png'
import logoIntro from '../../../assets/images/logo_intro_red.png'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: `${styles.headerSlider}`,

    dots: false,
    arrows: true,

    autoplay: true,
    autoplaySpeed: 4000,

    centerPadding: '10px',

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    fade: true,
};

const sliders = [
    {
        type: 'image',
        src: header1,
        text: 'ITALIAN STYLE RESTAURANT',
    },
    {
        type: 'image',
        src: header2,
        text: 'WELCOME TO RESTAURANT',
    },
    {
        type: 'image',
        src: header3,
        text: 'ELIXIR EXLUSIVELY FOOD',
    },
];

function HeaderSlider() {
    const [firstHeadline, setFirstHeadline] = useState('');
    const [secondHeadline, setSecondHeadline] = useState('');

    const [inPropFirst, setInPropFirst] = useState(true);
    const [inPropSecond, setInPropSecond] = useState(false);

    const nodeRefOne = useRef(null);
    const nodeRefTwo = useRef(null);

    function beforeChange(oldIndex, newIndex) {
        setInPropSecond(true);
        setInPropFirst(false);

        if (inPropFirst === true) {
            setInPropFirst(false);
            setSecondHeadline(sliders[newIndex].text);
            setInPropSecond(true);
        } else {
            setInPropSecond(false);
            setFirstHeadline(sliders[newIndex].text);
            setInPropFirst(true);
        }
    }

    return (
        <>
            <div className={styles.headerBox}>
                <SlickSlider
                    settings={{ ...settings, beforeChange }}
                    sliders={sliders}
                />

                <div className={styles.SliderWrapper}>
                    <img
                        src={logoIntro}
                        className={styles.sliderLogo}
                        alt="elixirLogo"
                    />

                    <div className={styles.animatedHeadline}>
                        <CSSTransition
                            nodeRef={nodeRefOne}
                            in={inPropFirst}
                            timeout={0}
                            className={styles.headline}
                        >
                            <p ref={nodeRefOne}>
                                {firstHeadline || sliders[0].text}
                            </p>
                        </CSSTransition>
                        <CSSTransition
                            nodeRef={nodeRefTwo}
                            in={inPropSecond}
                            timeout={0}
                            className={styles.headline}
                        >
                            <p ref={nodeRefTwo}>{secondHeadline}</p>
                        </CSSTransition>
                    </div>

                    <img
                        src={separator}
                        className={styles.sliderSeparator}
                        alt="sliderSeparator"
                    />
                    <p className={styles.mainSliderMsg}>
                        The Chef creates divine combinations
                    </p>

                    <a href="#menu-section-wrapper">

                        <button className={styles.downArrow} >
                            <img src={downArrow} alt="arrow" />
                        </button>

                    </a>
                </div>
            </div>
        </>
    );
}

export default HeaderSlider;
