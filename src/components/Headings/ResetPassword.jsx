import React from 'react';
import MyDynamicTag from './HeadingTemplate';
import styles from './SingleHeadingGenerator.module.scss';
import headerDecorator from '../../assets/images/header_decorator_wine.png'

const headings = {
    type: 'h4',
    content: 'Reset Password',
    alt: '',
    margin: 'mBoth40',
    className: 'headerDecorator',
    subheading: '',
    subcontent: '',
    imageBeforeSRC: headerDecorator,
    imageAfterSRC: headerDecorator,
};

function ResetPassHeading() {
    return (
        <>
            <MyDynamicTag headings={headings} key={headings.id} />
        </>
    );
}

export default ResetPassHeading;
