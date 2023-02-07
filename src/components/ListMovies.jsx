import React, { Fragment, useState, useEffect } from "react";
import { db } from "../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import List from "./List.jsx";
import styles from "./ListMovies.module.css";

function ListMovies() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    const moviesCollectionRef = collection(db, "movies");
    getDocs(moviesCollectionRef)
      .then((response) => {
        const movs = response.docs;
        setMovies(movs.map((mov) => ({ data: mov.data(), id: mov.id }))); // 데이터를 state로 저장합니다.
      })
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onReset = () => getMovies();
  return (
    <Fragment>
      <h1>Movie Lists ({movies.length})</h1>
      <div>
        <button className={styles.loadBtn} onClick={onReset}>
          새로고침
        </button>
      </div>
      <List movies={movies} />
    </Fragment>
  );
}

export default ListMovies;
