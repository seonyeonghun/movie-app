import React, { Fragment } from "react";

function AddMovie() {
  return (
    <Fragment>
      <h1>Add Movie</h1>
      <form>
        <ul>
          <li>
            <label htmlFor='title'></label>
            <input id='title' type='text' />
          </li>
          <li>
            <input type='text' />
          </li>
          <li>
            <input type='text' />
          </li>
          <li>
            <input type='text' />
          </li>
        </ul>
      </form>
    </Fragment>
  );
}

export default AddMovie;
