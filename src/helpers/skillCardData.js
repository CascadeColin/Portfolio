import HTML from "../img/html.svg";
import CSS from "../img/css.svg";
import Bootstrap from "../img/bootstrap.svg";
import Tailwind from "../img/tailwind.svg";
import JavaScript from "../img/js.svg";
import React from "../img/react.svg";
import NodeJS from "../img/nodejs-logo.png"
import JSON from "../img/json.svg";
import ExpressJS from "../img/expressjs_logo.png"
import MySQL from "../img/mysql.png";
import MongoDB from "../img/mongodb.png";
import Git from "../img/git.svg";
import { addKeyValues } from './addKeyValue'

const exportData = [
  {
    name: "HTML",
    link: HTML
  },
  {
    name: "CSS",
    link: CSS
  },
  {
    name: "Bootstrap",
    link: Bootstrap
  },
  {
    name: "Tailwind",
    link: Tailwind
  },
  {
    name: "JavaScript",
    link: JavaScript
  },
  {
    name: "React",
    link: React
  },
  {
    name: "Node.js",
    link: NodeJS
  },
  {
    name: "JSON",
    link: JSON
  },
  {
    name: "Express.js",
    link: ExpressJS
  },
  {
    name: "MySQL",
    link: MySQL
  },
  {
    name: "MongoDB",
    link: MongoDB
  },
  {
    name: "Git",
    link: Git
  },
];

export const data = addKeyValues(exportData)


 