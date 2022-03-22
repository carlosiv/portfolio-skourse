import styled from "styled-components";
const myImage = require("../../images/myImg.jpg");

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const Greetings = styled.div`
  text-align: center;
  font-size: 40px;
`;

export const AboutImage = styled.img.attrs(() => ({
  src: myImage,
}))`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-size: cover;
`;

export const IntroductionContainer = styled.div`
  font-family: "Poppins", sans-serif;
  width: 60%;
  text-align: center;
  margin: 15px;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 40%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.a`
  margin: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
