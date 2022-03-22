import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";
import { MainContainer } from "./styles";

const Main = () => {
  return (
    <MainContainer>
      <AboutMe />
      <Projects />
    </MainContainer>
  );
};

export default Main;
