import React, { Fragment, useEffect, useState } from "react";
import Navigation from "./Navigation.jsx";
import { db } from "../lib/firebase.js";
import { collection } from "firebase/firestore";
function Create() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [runtime, setRuntime] = useState("");
  const [open_year, setOpen_year] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    checkForms();
  };
  
  const addMovie = async () => {
    const moviesRef = db.collection('movies');
    const newMovie = {
      titile: title,
      genre,
      runtime,
      open_year
    }
    moviesRef.add(newMovie)
    .then(docRef => {
      console.log('New Movie Created with ID : ', docRef.id)
    })
    .catch(error => {
      console.log('Error adding new Movie: ', error);
    })

  }
  const resetInputs = () => {};
  const checkForms = () => {
    if (title === "") {
      alert("제목을 입력해주세요!");
    } else if (genre === "") {
      alert("장르를 입력해주세요!");
    } else if (runtime === "") {
      alert("상영시간을 입력해주세요");
    } else if (open_year === "") {
      alert("개봉일을 입력해주세요!");
    } else {
    }
  };
  useEffect(() => {
    
  }, []);
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
                  type='text'
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
        <button type="submit">등록</button>
        <button onClick={resetInputs}>취소</button>
      </form>
    </Fragment>
  );
}

export default Create;
