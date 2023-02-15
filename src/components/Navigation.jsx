import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  background-color: #eee;
  padding: 0.5rem 0;
  color: white;
`;
function Navigation(props) {
  return (
    <div className='page-link'>
      <UL>
        <li>
          <Link to='/'>처음으로</Link>
        </li>
        <li>
          <Link to='/list'>영화정보 조회</Link>
        </li>
        <li>
          <Link to='/add'>영화정보 등록</Link>
        </li>
      </UL>
    </div>
  );
}

export default Navigation;
