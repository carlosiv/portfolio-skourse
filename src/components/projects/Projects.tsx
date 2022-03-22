import {
  HeadingContainer,
  ProjectCard,
  ProjectCardImg,
  ProjectCardTitle,
  ProjectContainer,
  ProjectDescription,
  ProjectLink,
  ProjectLinksContainer,
  ProjectsContainer,
  ProjectStackContainer,
} from "./styles";
import { FaGithub } from "react-icons/fa";
const todoDraggable = require("../../images/todo-draggable.png");
const weather = require("../../images/weather.png");
const todo = require("../../images/todo.png");
const posts = require("../../images/posts.png");

const projectsContent = [
  {
    title: "todo list basic",
    image: todo,
    description:
      "A simple Todo list that can do basic CRUD operations and filter todo by status",
    stack: "MongoDB, Express, React/Typescript, NodeJS",
    githhubSource: "https://github.com/cvelascoiv/todolist-typescript",
    appLink: "",
  },
  {
    title: "Todo list Draggable",
    image: todoDraggable,
    description:
      "A Todo list with CRUD plus Draggable for enhanced user experience",
    stack: "MongoDB, Express, React/Typescript, NodeJS",
    githhubSource: "https://github.com/cvelascoiv/todo-draggable",
    appLink: "https://todo-draggable.netlify.app",
  },
  {
    title: "Weather App",
    image: weather,
    description: "An app that can display local 5-day Local Weather Forecast",
    stack: "React/Typescript",
    githhubSource: "https://github.com/cvelascoiv/weather-app",
    appLink: "https://mylocalweatherapp.netlify.app",
  },
  {
    title: "Posts App",
    image: posts,
    description: "An app that can create a post, view own posts and hide posts",
    stack: "React/Typescript",
    githhubSource: "https://github.com/cvelascoiv/posts-typescript",
    appLink: "",
  },
];
const Projects = () => {
  return (
    <ProjectsContainer>
      <HeadingContainer>Projects</HeadingContainer>
      <ProjectContainer>
        {projectsContent &&
          projectsContent.map((proj) => (
            <ProjectCard>
              <ProjectCardImg src={proj.image ? proj.image : ""} />
              <ProjectCardTitle>
                {proj.title.toLocaleUpperCase()}
              </ProjectCardTitle>
              <ProjectDescription>{proj.description}</ProjectDescription>
              <ProjectStackContainer>{proj.stack}</ProjectStackContainer>
              <ProjectLinksContainer>
                {proj.githhubSource && (
                  <ProjectLink href={proj.githhubSource} target="_blank">
                    Github
                  </ProjectLink>
                )}
                {proj.appLink && (
                  <ProjectLink href={proj.appLink} target="_blank">
                    Website
                  </ProjectLink>
                )}
              </ProjectLinksContainer>
            </ProjectCard>
          ))}
      </ProjectContainer>
    </ProjectsContainer>
  );
};

export default Projects;
