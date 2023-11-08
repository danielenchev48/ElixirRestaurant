import React from 'react';
import MyDynamicTag from './HeadingTemplate';
import styles from './SingleHeadingGenerator.module.scss';
import headerDecorator from '../../assets/images/header_decorator.png'

const headings = {
    type: 'h3',
    content: 'About us',
    margin: 'mTop10',
    alt: '',
    className: 'headerDecorator',
    subheading: '',
    subcontent: '',
    imageBeforeSRC: headerDecorator,
    imageAfterSRC: headerDecorator,
    id: 3,
};

function AboutHeading() {
    return (
        <>
            <MyDynamicTag headings={headings} key={headings.id} />
        </>
    );
}

export default AboutHeading;
