import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <h1>Sofia Pazari</h1>
      <StyledNavLinks>
        <ul>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </StyledNavLinks>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  width: 90%;
  margin: auto;
  h1 {
    flex: 20 1 20rem;
    font-size: 2.3rem;
  }
`;

const StyledNavLinks = styled(motion.div)`
  flex: 1 1 17rem;
  padding-left: 5rem;
  align-items: center;
  display: flex;
  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: #3b3b3b;
  }
`;

export default Nav;
