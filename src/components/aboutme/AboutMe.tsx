import {
  AboutImage,
  AboutMeContainer,
  Greetings,
  IntroductionContainer,
  Links,
  LinksContainer,
} from "./styles";

import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Greetings>Hi! I'm Carlos!</Greetings>
      <AboutImage />
      <IntroductionContainer>
        I am an aspiring Web Developer and Math enthusiast. I design and create
        fully functional apps that elevates our quality of living. I create
        solution to problems.
      </IntroductionContainer>
      <LinksContainer>
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          <Links href="https://github.com/cvelascoiv/" target="_blank">
            <FaGithub />
          </Links>
        </IconContext.Provider>
      </LinksContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
