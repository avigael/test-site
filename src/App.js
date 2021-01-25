import logo from "./Assets/logo.svg";
import graphic from "./Assets/graphic.svg";
import "./App.css";

const cards = [
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/1.png",
    title: "DialogFlow Web Shop",
    description:
      "Shopping website with DialogFlow assistant. Navigate, find, and purchase items using only DialogFlow. Back-end written in Python.",
    tags: ["React", "Javascript", "DialogFlow", "Full Stack"],
    link: "https://github.com/avigael/dialogflow-shopping-site",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/2.png",
    title: "Fitness App",
    description:
      "Simple Fitness App Demo written with React Native. Allows user to create an account and set and track activity goals.",
    tags: ["React Native", "Javascript", "Full Stack"],
    link: "https://github.com/avigael/react-native-fitness-app",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/3.png",
    title: "Fitness & Shopping REST API",
    description:
      "A simple REST example using Python. This API is used in to separate applications I made which include a Fitness App and a Shopping site with DialogFlow integration.",
    tags: ["Flask", "Python", "REST", "Back-End"],
    link: "https://github.com/avigael/fitness-shopping-rest",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/4.png",
    title: "2D Raytracing",
    description:
      "2D Raytracing using the mathmatical concept of line-line intersection to cast rays from a point and determine when they hit an object.",
    tags: ["Pygame", "Python", "Raytracing"],
    link: "https://github.com/avigael/raytracing-example",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/5.png",
    title: "Simple Python Painter",
    description: "A simple toy drawing application written in Python",
    tags: ["Pygame", "Python"],
    link: "",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/6.png",
    title: "Tic-Tac-Toe",
    description: "Simple emoji Tic-Tac-Toe game written in Go",
    tags: ["Go", "Game"],
    link: "https://github.com/avigael/go-tictactoe",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/7.png",
    title: "Education Dashboard",
    description:
      "Educational dashboard designed to replicate the student portal university students see when registering for classes.",
    tags: ["React", "Javascript", "Bootstrap", "Full Stack"],
    link: "https://github.com/avigael/education-dashboard",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/8.png",
    title: "LCD Computer Vision",
    description:
      "Small Python program using computer vision to detect and store numbers from an LCD display in a CSV file.",
    tags: ["OpenCV", "Python", "Computer Vision"],
    link: "https://github.com/avigael/LCD-Digit-Recognition",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/9.png",
    title: "Digital Business Card",
    description:
      "Simple Business Card website for displaying information you might find on a business card.",
    tags: ["HTML", "CSS", "Template"],
    link: "https://github.com/avigael/business-card-site",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/10.png",
    title: "Portfolio Website",
    description: "Website I designed to display the projects I host on Github.",
    tags: ["React", "Javascript", "Portfolio", "Website"],
    link: "https://github.com/avigael/main-site",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/11.png",
    title: "Concurrent RSS Indexer",
    description:
      "This is a multithreaded, thread-pool, and singlethreaded indexer for RSS feeds written in Rust.",
    tags: ["RSS", "Rust", "Multithreaded"],
    link: "https://github.com/avigael/rust-rss-indexer",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/12.png",
    title: "Duodoku Solver",
    description: "Haskell project for solving Sudoku alternative Duodoku",
    tags: ["Haskell"],
    link: "https://github.com/avigael/duodoku-solver",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/13.png",
    title: "Liskell",
    description: "Toy untyped lambda calculus language written in Haskell",
    tags: ["Haskell", "Programming Language"],
    link: "https://github.com/avigael/liskell",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/14.png",
    title: "RPN Calculator",
    description: "A reverse polish notation calculator written in Rust",
    tags: ["Rust", "Calculator", "Reverse Polish Notation"],
    link: "https://github.com/avigael/reverse-polish-notation-calculator",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/15.png",
    title: "Rust BST",
    description: "Simple Binary Search Tree written in Rust",
    tags: ["Rust", "Data Structure", "BST"],
    link: "https://github.com/avigael/rust-bst",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/13.png",
    title: "Funtional Programming Data Structures",
    description:
      "Functional programming data structures using pure operations.",
    tags: ["Haskell", "Functional", "Data Structure"],
    link: "https://github.com/avigael/functional-data-structures",
  },
  {
    image:
      "https://raw.githubusercontent.com/avigael/assets/main/images/projects/16.png",
    title: "More Coming Soon",
    description:
      "What you see here are all my completed projects, but I'm always working on new one. Check out my Github!",
    tags: ["Github"],
    link: "https://github.com/avigael",
  },
];

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="Header-content">
          <div className="Nav">
            <img draggable="false" src={logo} className="Logo" alt="logo" />
            <div className="Nav-links">
              <a href="https://www.linkedin.com/in/avigael-gomez-75a0071b8/">
                <div className="Circle">
                  <svg class="Icons" viewBox="0 0 11 11">
                    <path d="M10.4625 5.754V9.2523h-2.0282V5.9883c0-.8199-.2934-1.3795-1.0275-1.3795c-.5605 0-.8939.3771-1.0406.7419c-.0535.1305-.0673.312-.0673.4945V9.2523h-2.0288c0 0 .0273-5.5283 0-6.101h2.0286v.8648c-.0041.0065-.0095.0134-.0133.0197h.0133v-.0197c.2695-.4151.7509-1.0082 1.8282-1.0082C9.462 3.008 10.4625 3.8799 10.4625 5.754zM2.1481.2103C1.454.2103 1 .6655 1 1.2642c0 .5856.4409 1.0547 1.1211 1.0547h.0135c.7075 0 1.1475-.4689 1.1475-1.0547C3.2689.6655 2.8422.2103 2.1481.2103zM1.1205 9.2523h2.0281v-6.101H1.1205V9.2523z" />
                  </svg>
                </div>
              </a>
              <a href="https://github.com/avigael/">
                <div className="Circle">
                  <svg class="Icons" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
              </a>
              <a href="mailto: code@gael.cc">
                <div className="Circle">
                  <svg class="Icons" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </div>
              </a>
              <a href="https://signal.group/#CjQKIDBHB_pzCc_WCKWiV0yXjEGJqY4ZuGGB_-ldHHmkqjB6EhCufEN6SBCCSDKKyFzJQlbr">
                <div className="Circle">
                  <svg class="Icons" viewBox="0 0 17 17">
                    <path d="M6.45.65L6.625 1.375C5.9 1.55 5.225 1.825 4.6 2.2L4.225 1.55C4.9 1.15 5.65.825 6.45.65L6.45.65ZM10.275.65L10.1 1.375C10.8 1.55 11.475 1.825 12.1 2.2L12.5 1.55C11.8 1.15 11.05.825 10.275.65L10.275.65ZM1.5 4.275C1.1 4.95.775 5.7.6 6.475L1.325 6.675C1.5 5.95 1.775 5.275 2.15 4.65L1.5 4.275ZM1.1 8.4C1.1 8.05 1.125 7.675 1.2 7.325L.45 7.2C.325 8 .325 8.8.45 9.6L1.2 9.5C1.125 9.125 1.1 8.775 1.1 8.4ZM12.5 15.25L12.1 14.6C11.475 15 10.8 15.275 10.1 15.45L10.275 16.175C11.05 15.975 11.8 15.675 12.5 15.25L12.5 15.25ZM15.6 8.4C15.6 8.775 15.575 9.125 15.525 9.5L16.275 9.6C16.375 8.8 16.375 8 16.275 7.2L15.525 7.325C15.575 7.675 15.6 8.05 15.6 8.4ZM16.125 10.325L15.4 10.15C15.225 10.85 14.95 11.525 14.575 12.15L15.2 12.55C15.625 11.85 15.925 11.1 16.125 10.325L16.125 10.325ZM9.45 15.575C8.725 15.675 8 15.675 7.275 15.575L7.15 16.325C7.95 16.425 8.75 16.425 9.55 16.325L9.45 15.575ZM14.2 12.7C13.75 13.3 13.25 13.8 12.65 14.25L13.1 14.85C13.75 14.375 14.325 13.8 14.8 13.15L14.2 12.7ZM12.65 2.575C13.25 3 13.75 3.525 14.2 4.1L14.8 3.65C14.325 3 13.75 2.45 13.1 1.975L12.65 2.575ZM2.525 4.1C2.95 3.525 3.475 3 4.05 2.575L3.6 1.975C2.975 2.45 2.4 3 1.925 3.65L2.525 4.1ZM15.2 4.275L14.575 4.65C14.95 5.275 15.225 5.95 15.4 6.675L16.125 6.475C15.925 5.7 15.625 4.95 15.2 4.275L15.2 4.275ZM7.275 1.25C8 1.125 8.725 1.125 9.45 1.25L9.55.5C8.75.375 7.95.375 7.15.5L7.275 1.25ZM2.9 15.05L1.35 15.4L1.725 13.85L1 13.675L.625 15.225C.625 15.3.6 15.35.6 15.4C.6 15.825.95 16.15 1.35 16.15C1.425 16.15 1.475 16.15 1.525 16.125L3.075 15.775L2.9 15.05ZM1.15 13.025L1.875 13.175L2.125 12.125C1.75 11.5 1.5 10.85 1.325 10.15L.6 10.325C.75 11 1 11.625 1.325 12.225L1.15 13.025ZM4.65 14.65L3.575 14.9L3.75 15.625L4.525 15.45C5.125 15.775 5.775 16 6.425 16.175L6.6 15.45C5.925 15.275 5.25 15 4.65 14.625L4.65 14.65ZM8.35 1.9C4.8 1.9 1.85 4.85 1.85 8.4C1.85 9.625 2.2 10.825 2.85 11.875L2.225 14.525L4.9 13.9C5.925 14.55 7.125 14.9 8.35 14.9C11.925 14.9 14.85 11.975 14.85 8.4C14.85 4.85 11.925 1.9 8.35 1.9C8.35 1.9 8.35 1.9 8.35 1.9L8.35 1.9Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="Header-intro">
            <div className="Intro-text">
              <p>Hey!</p>
              <p className="Name">I'm Gael</p>
              <p>and I'm a</p>
              <p>programmer</p>
            </div>
            <div className="Intro-image">
              <img
                draggable="false"
                src={graphic}
                className="Image"
                alt="Character Graphic"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="App-body">
        <div className="Body-content">
          <div className="Content-title">
            <p className="Title">My Projects</p>
          </div>
          <section className="Cards-box">
            {cards.map((cards, index) => {
              return <Card key={index} {...cards}></Card>;
            })}
          </section>
        </div>
      </section>
      <section className="App-footer">
        <div className="Footer-content">
          <p
            style={{ color: "white", marginTop: "40px", marginBottom: "20px" }}
          >
            Copyright © 2021 Avigael Gomez
          </p>
        </div>
      </section>
    </div>
  );
}

const Card = (props) => {
  const { image, title, description, tags, link } = props;
  return (
    <div className="Card">
      <a href={link}>
        <div className="Card-image">
          <img
            draggable="false"
            src={image}
            style={{ height: "100%" }}
            alt="Preview"
          />
        </div>
      </a>

      <div className="Card-title">{title}</div>
      <div className="Card-description">{description}</div>
      <div className="Card-tags">
        {tags.map((tag, index) => {
          return (
            <div className="Card-tag" key={index}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
