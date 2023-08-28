import React from "react";
import MyDynamicTag from "./HeadingTemplate";
import styles from './SingleHeadingGenerator.module.scss'


   const headings =  { type: 'h2', content: 'The history', alt: '',  margin: '', className: 'colorTextGreen',subheading: '', 
   subcontent: '', imageBeforeSRC: '', imageAfterSRC: '', id: 4 }

  // slideSeparator - with separetor under h1
  // headerDecorator - with 2 lines before and afer
  // timetableDecorator - 
  // bottomLine - text with one line before and after
  // colorTextGreen - h2 - text green
  // menuGreen - h3 green text
  function HistoryHeading () {
  return (
    <>
      <MyDynamicTag headings={headings}  key={headings.id}/>  
    </>
  );
}

export default HistoryHeading;
