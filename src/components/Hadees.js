import React, { useState, useEffect } from 'react';
import axios from 'axios';
import website from './data';

const HadithList = () => {
  const [hadiths, setHadiths] = useState([]);


  useEffect(() => {
    axios.get(website.backend+'/hadees')
      .then(response => {
        setHadiths(response.data);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='hadees'>
      <h1>احادیث کا مطالعہ</h1>
      <ul>
        {hadiths.map(hadith => (
          <li key={hadith._id}>
            <p><strong>Book:</strong> {hadith.book}</p>
            <p><strong>Chapter:</strong> {hadith.chapter}</p>
            <p><strong>Hadith Number:</strong> {hadith.hadithNumber}</p>
            <p><strong>Text:</strong> {hadith.text}</p>
            <p><strong>Narrator:</strong> {hadith.narrator}</p>
            <p><strong>Reference:</strong> {hadith.reference}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HadithList;

