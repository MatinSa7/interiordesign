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
        <StyledGrid1>
          <h2>People</h2>
          <img className="grid1" src={lady} alt="" />
        </StyledGrid1>
        <StyledGrid2>
          <h2>Interiors</h2>
          <img className="grid2" src={interior} alt="" />
        </StyledGrid2>
        <StyledGrid3>
          <h2>Outdoors</h2>
          <img className="grid3" src={guy} alt="" />
        </StyledGrid3>
        <StyledGrid4>
          <h2>City</h2>
          <img className="grid4" src={building} alt="" />
        </StyledGrid4>
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
    opacity: 0.9;
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

const StyledGrid1 = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    z-index: 1;
  }
`;
const StyledGrid2 = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    z-index: 1;
  }
  img:hover {
    opacity: 1;
  }
`;
const StyledGrid3 = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    z-index: 1;
  }
`;
const StyledGrid4 = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    position: absolute;
    z-index: 1;
  }
`;

export default MainPage;
