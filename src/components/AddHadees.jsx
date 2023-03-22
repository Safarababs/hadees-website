import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import website from "./data";

const AddHadith = () => {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [hadithNumber, setHadithNumber] = useState("");
  const [text, setText] = useState("");
  const [narrator, setNarrator] = useState("");
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  

  async function handleSubmit  (event)  {
    event.preventDefault();
    setLoading(true)

    const data = {
      book: book,
      chapter: chapter,
      hadithNumber: hadithNumber,
      text: text,
      narrator: narrator,
      reference: reference,
    };

    if (book === "") {
      swal("Book Name ?", "Book Name is must", "error");
    } else if (hadithNumber === "") {
      swal("Hadees Number ?", "Please mention hadees number", "error");
    } else if (chapter === "") {
      swal("Chapter Name ?, Chapter name is must", "error");
    } else if (text === "") {
      swal("Hadees text ?", "Hadees is required", "error");
    } else if (narrator === "") {
      swal("Ravi ?", "Please mention ravi", "error");
    } else if (reference === "") {
      swal("Reference ?", "Please type reference", "error");
    } else {
      await axios.post(website.backend+"/addhadees", data)
        .then((response) => {
          console.log(response);
          swal(
            response.data,
            response.data,
            response.data === "added successfully" ? "success" : "error"
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setLoading(false)
  };

 
  return (
    <div>
      <form onSubmit={handleSubmit} className="hadees-form">
        <h1>Add Hadith</h1>
        <div>
          <select
            onChange={(event) => setBook(event.target.value)}
            type="text"
            placeholder="Book Name"
            id="book"
            value={book}
            className="form-control"
          >
            <option defaultValue="selected">Select Book Name</option>
            <option>مسائل الشریعہ ترجمہ وسائل الشریعہ</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Chapter Name"
            id="chapter"
            value={chapter}
            onChange={(event) => setChapter(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Hadees number"
            id="hadithNumber"
            value={hadithNumber}
            onChange={(event) => setHadithNumber(event.target.value)}
          />
        </div>
        <div>
          <textarea
            id="text"
            placeholder="Write hadees here"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Narrator || Raavi"
            id="narrator"
            value={narrator}
            onChange={(event) => setNarrator(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Reference"
            id="reference"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit} disabled={loading}>
        {loading ? "Saving... Please wait" : 'Submit'}</button>

        
      </form>
    </div>
  );
};

export default AddHadith;
