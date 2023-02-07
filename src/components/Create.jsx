import React, { Fragment, useEffect, useState } from "react";
function Create() {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [runtime, setRuntime] = useState("");
  const [openyear, setOpenyear] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addInputs = () => {
    checkForms();
    const movieData = {
      title: title,
      genre: genre,
      runtime: runtime,
      openyear: openyear,
    };
    console.log("movieData : " + movieData);
    setMovie([movieData]);
  };
  const resetInputs = () => {};
  const checkForms = () => {
    if (title === "") {
      alert("제목을 입력해주세요!");
    } else if (genre === "") {
      alert("장르를 입력해주세요!");
    } else if (runtime === "") {
      alert("상영시간을 입력해주세요");
    } else if (openyear === "") {
      alert("개봉일을 입력해주세요!")
    } else {
    }
  };
  useEffect(() => {}, [movie]);
  return (
    <Fragment>
      <h1>Create Movie</h1>
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
                  value={openyear}
                  onChange={(e) => setOpenyear(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <button onClick={addInputs}>등록</button>
        <button onClick={resetInputs}>취소</button>
      </form>
    </Fragment>
  );
}

export default Create;
