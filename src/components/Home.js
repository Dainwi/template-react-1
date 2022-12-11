import React from "react";
import styled from "styled-components";
import { HomeData } from "../data/HomeData";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 110vh;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: #fff;
  h1 {
    font-size: 7rem;
    font-weight: 700;
    letter-spacing: 40px;
    font-family: "Cairo", sans-serif;
  }
  h1,
  p {
    z-index: 10;
    opacity: 70%;
    margin: 3rem 0;
  }
  p {
    font-family: monospace;
    font-size: 1rem;
    letter-spacing: 8px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const Button = styled.button`
  color: #fff;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 35px;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  opacity: 70%;
  width: 10vw;
  margin-top: 12px;
  z-index: 10;
`;

const HomeGraphic = styled.div`
  position: absolute;
  top: 397px;
  right: auto;
  background-color: #808080;
  height: 1px;
  width: 20%;
  border-radius: 10px;
`;

export const Home = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        {HomeData.map((pic, index) => {
          return (
            <>
              <HeroImage key={index} src={pic.image} alt={pic.alt} />
              <h1>{pic.title}</h1>
              <HomeGraphic />
              <p>{pic.description}</p>
            </>
          );
        })}
        <Button>JOIN US</Button>
      </HeroWrapper>
    </HeroSection>
  );
};
