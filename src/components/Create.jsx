import React, { Fragment, useEffect, useState } from "react";
import Navigation from "./Navigation.jsx";
import { db } from "../lib/firebase.js";
import { collection, addDoc } from "firebase/firestore";
function Create() {
  const [inputMovie, setInputMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [runtime, setRuntime] = useState("");
  const [open_year, setOpen_year] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie();
    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setGenre("");
    setOpen_year("");
    setRuntime("");
  };
  const addMovie = () => {
    const docRef = addDoc(collection(db, "movies"), {
      title: title,
      genre: genre,
      runtime: runtime,
      open_year: new Date(open_year).toLocaleString(),
    }).catch((error) => console.log(error));
  };
  return (
    <Fragment>
      <h1>Movie App - Create Mode</h1>
      <Navigation props='create' />
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>장르</th>
              <th>상영시간</th>
              <th>개봉일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
              <td>
                <input
                  type='text'
                  id='genre'
                  name='genre'
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </td>
              <td>
                <input
                  type='text'
                  id='runtime'
                  name='runtime'
                  value={runtime}
                  onChange={(e) => setRuntime(e.target.value)}
                />
              </td>
              <td>
                <input
                  type='datetime-local'
                  id='open_year'
                  name='open_year'
                  value={open_year}
                  onChange={(e) => setOpen_year(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <button type='submit'>등록</button>
        <button onClick={resetInputs}>취소</button>
      </form>
    </Fragment>
  );
}

export default Create;
