import React, { useState } from "react";
import axios from "axios";
import website from "./data";

const HadithList = () => {
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState({
    display:"Block"
  })

  async function Hadees() {
    setLoading(true);

    await axios
      .get(website.backend + "/hadees")
      .then((response) => {
        setHadiths(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setLoading(false);
    setDisplay({display:"none"})
  }

  return (
    <div className="hadees">
      <h1>احادیث کا مطالعہ</h1>
      <button onClick={Hadees} type="submit" style={{display:display.display}}>Please Click here to read hadees</button>
      {loading ? <h1>Loading... Please wait</h1>:
      <ul>
        {hadiths.map((hadith) => (
          <li key={hadith._id}>
            <p>
              <strong>Book:</strong> {hadith.book}
            </p>
            <p>
              <strong>Chapter:</strong> {hadith.chapter}
            </p>
            <p>
              <strong>Hadith Number:</strong> {hadith.hadithNumber}
            </p>
            <p>
              <strong>Text:</strong> {hadith.text}
            </p>
            <p>
              <strong>Narrator:</strong> {hadith.narrator}
            </p>
            <p>
              <strong>Reference:</strong> {hadith.reference}
            </p>
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default HadithList;
