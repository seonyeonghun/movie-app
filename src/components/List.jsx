import React, { Fragment } from "react";

import styles from "./List.module.css";

function List({ movies }) {
  // console.log(movies);
  return (
    <Fragment>
      <table className={styles.lists}>
        <thead>
          <tr>
            <th>제목</th>
            <th>장르</th>
            <th>상영시간</th>
            <th>개봉일</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.data.title}</td>
              <td>{movie.data.genre}</td>
              <td>{Math.ceil(movie.data.runtime / 60)}시간</td>
              <td>
                {movie.data.open_year.toDate().getFullYear()}.
                {movie.data.open_year.toDate().getMonth() + 1}.
                {movie.data.open_year.toDate().getDay()}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>합계</td>
            <td colSpan='3'>{movies.length}건의 영화정보가 조회되었습니다.</td>
          </tr>
        </tfoot>
      </table>
    </Fragment>
  );
}

export default List;
