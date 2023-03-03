// import images when ready
import vapour from '../img/vapour.JPG'
import noteTaker from '../img/note-taker.PNG'
import phone from '../img/phone.avif'
import jate from '../img/jate.PNG'
import employee from '../img/employee-tracker.PNG'
import pokemon from '../img/International_Pokemon_logo.png'

// adds key value to objs for react
import { addKeyValues } from "./addKeyValue";

const projectArr = [
  {
    projectName: "Vapour",
    description: "An unofficial extension for the Steam Client",
    projectImg: vapour,
    githubLink: "https://github.com/CascadeColin/Steam-Achievement-Picker",
    deployedLink: "https://vapour-for-gamers.herokuapp.com/",
    tech: "JavaScript, Node, MySQL, Express, Handlebars, SteamAPI"
  },
  {
    projectName: "Note Taker",
    description: 'An app that helps you stay organized',
    projectImg: noteTaker,
    githubLink: "https://www.github.com/CascadeColin/Note-Taker",
    deployedLink: "https://colins-note-taker.herokuapp.com/",
    tech: 'JavaScript, Node, Express'
  },
  {
    projectName: "Social Network API",
    description: "An API that connects a social media app's server to a database",
    projectImg: phone,
    githubLink: "https://github.com/CascadeColin/Social-Network-API",
    deployedLink: "https://github.com/CascadeColin/Social-Network-API",
    tech: "JavaScript, Node, Express, MongoDB"
  },
  {
    projectName: "Progressive Web App - Just Another Text Editor",
    description: 'A downloadable text editor that saves your work even if you are offline',
    projectImg: jate,
    githubLink: "https://www.github.com/CascadeColin/Text-Editor-PWA",
    deployedLink: "https://cac-jate.herokuapp.com/",
    tech: "Webpack, JavaScript, Node, IndexDB"
  },
  {
    projectName: "Employee Tracker",
    description: 'A Command-line application that allows a company to manage their employee database',
    projectImg: employee,
    githubLink: "https://www.github.com/CascadeColin/Employee-Tracker",
    deployedLink: "https://www.google.com",
    tech: "Node, MySQL"
  },
  {
    projectName: "Pokemon ID Finder",
    description: 'A fun little project to help you get to know your Pokemon!',
    projectImg: pokemon,
    githubLink: "https://www.github.com/CascadeColin/Pokemon-ID-Finder",
    deployedLink: "https://cascadecolin.github.io/Pokemon-ID-Finder/",
    tech: "JavaScript, PokeAPI"
  },
];

export const projectData = addKeyValues(projectArr);
