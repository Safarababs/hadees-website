import React, { useState, useEffect } from "react";

import MuarifChannel from "./youtube/MuarifChannel";
import SafarChannel from "./youtube/SafarChannel";

const Contact = ({ videoId }) => {
  return (
    <div className="contact">
      <h1>
        اس ویب سائٹ کو بنانے کا مقصد یہ کہ آئمہ اہلبیت علیہ السلام سے روایت
        ہونے والی تمام احادیث کو جمع کیا جائے جو احباب اس کار خیر میں میری مدد
        کر رہے ہیں ان کا بے حد مشکور ہوں اور دعا گو ہوں کہ مالک دو جہاں آپ سے
        اس جہان میں بھی راضی ہو اور اگلے جہان میں بھی۔ کسی بھی طرح کی راہنمائ
        لینے کیلے آپ میرے وٹس ایپ پہ رابطہ کر سکتے ہیں
        <a href="https://wa.me/+923016005735" target="_blank" rel="noreferrer">
          <h3> click to whatsapp! </h3>
        </a>
        <a
          href="mailto: safarabbas_2010@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <h3> click to email me! </h3>
        </a>
        ہمارے یوٹیوب چینل کی تفصیل درج ذیل ہے
      </h1>
      
        <div className="youtube">
          <SafarChannel videoId="UCtEw17K9z4lpm4Q_vWt4IBQ" />
          <MuarifChannel videoId="UCtEw17K9z4lpm4Q_vWt4IBQ" />
        </div>
     
    </div>
  );
};

export default Contact;
