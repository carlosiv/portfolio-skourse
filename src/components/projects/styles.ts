import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled.h1`
  display: flex;
  text-align: center;
  text-decoration: underline solid blue 5px;
  margin-bottom: 15px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

export const ProjectCardTitle = styled.h1`
  position: relative;
  background-color: transparent;
  margin-left: 5px;
  font-family: "Poppins", sans-serif;
`;
type ImgProps = {
  src: string;
};

export const ProjectCardImg = styled.img.attrs((props: ImgProps) => ({
  src: props.src,
}))`
  position: relative;
  height: fit-content;
  width: 100%;
  object-fit: cover;
`;

export const ProjectDescription = styled.p`
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  padding: 5px;
`;

export const ProjectStackContainer = styled.span`
  color: pink;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  padding: 5px;
`;

export const ProjectLinksContainer = styled.div`
  display: flex;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const ProjectLink = styled.a`
  margin: 10px;
  cursor: pointer;
  font-size: 14px;
  background-color: inherit;
  color: white;
  font-family: "Poppins", sans-serif;
  &:hover {
    transform: scale(1.2);
  }
`;
export const ProjectCard = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 5px;
  border: 2px solid white;
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    background-color: whitesmoke;
    transform: scale(1.1);
    border: 2px solid blue;
    color: #000;
    z-index: 20;
    ${ProjectLink} {
      color: #000;
      background-color: inherit;
    }
  }
`;
