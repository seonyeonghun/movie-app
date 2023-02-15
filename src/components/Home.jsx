import React from "react";
import Navigation from "./Navigation";
function Home(props) {
  return (
    <div>
      <h1>Movie App - Home</h1>
      <p>파이어베이스와 React를 이용한 무비 앱</p>
      <Navigation />
      <p>샘플 사이트입니다. 각 메뉴를 클릭해보세요!!</p>
    </div>
  );
}

export default Home;
