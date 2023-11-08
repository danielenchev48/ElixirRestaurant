import React from 'react';
import MyDynamicTag from './HeadingTemplate';
import styles from './SingleHeadingGenerator.module.scss';
import headerDecorator from '../../assets/images/header_decorator_wine.png'

const headings = {
    type: 'h4',
    content: 'Log In',
    alt: '',
    margin: 'mBoth20',
    className: 'headerDecorator',
    subheading: '',
    subcontent: '',
    imageBeforeSRC: headerDecorator,
    imageAfterSRC: headerDecorator,
};

function LoginHeading() {
    return (
        <>
            <MyDynamicTag headings={headings} key={headings.id} />
        </>
    );
}

export default LoginHeading;
