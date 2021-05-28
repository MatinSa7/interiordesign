import React from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <MainPage />
    </div>
  );
}

export default App;
