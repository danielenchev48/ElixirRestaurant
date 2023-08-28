import React from "react";
import MyDynamicTag from "./HeadingTemplate";
import styles from './SingleHeadingGenerator.module.scss'


   const headings =  { type: 'h3', content: 'About us',margin: 'mTop10', alt: '', className: 'headerDecorator',subheading: '', 
   subcontent: '', imageBeforeSRC: 'src/assets/images/header_decorator.png', imageAfterSRC: 'src/assets/images/header_decorator.png', id: 3 }

  // slideSeparator - with separetor under h1
  // headerDecorator - with 2 lines before and afer
  // timetableDecorator - 
  // bottomLine - text with one line before and after
  // colorTextGreen - h2 - text green
  // menuGreen - h3 green text
  function AboutHeading () {
  return (
    <>
      <MyDynamicTag headings={headings}  key={headings.id}/>  
    </>
  );
}

export default AboutHeading;
