import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import building from "../img/building.jpg";
import guy from "../img/guy.jpg";
import interior from "../img/interior.jpg";
import lady from "../img/lady.jpg";

const MainPage = () => {
  return (
    <StyledGridContainer>
      <StyledGrid>
        <img className="grid1" src={lady} alt="" />
        <img className="grid2" src={interior} alt="" />
        <img className="grid3" src={guy} alt="" />
        <img className="grid4" src={building} alt="" />
      </StyledGrid>
    </StyledGridContainer>
  );
};

const StyledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  grid-row-gap: 10vh;
  grid-column-gap: 5vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const StyledGridContainer = styled(motion.div)`
  margin: auto;
  width: 80%;
`;
export default MainPage;
