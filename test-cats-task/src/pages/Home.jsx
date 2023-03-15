import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Cats from "../components/Cats";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Home = () => {
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <Wrapper>
      <Categories />
      <Cats />
    </Wrapper>
  );
};

export default Home;
