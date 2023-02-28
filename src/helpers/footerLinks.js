import github from "../img/github-mark.png";
import linkedin from "../img/LI-In-Bug.png";
import twitter from "../img/twitter-blue.png";
import { addKeyValues } from "./addKeyValue";

const footerItems = [
  {
    alt: "Github Profile Link",
    href: "https://github.com/CascadeColin",
    src: github,
  },
  {
    alt: "LinkedIn Profile Link",
    href: "https://www.linkedin.com/in/colin-marshall-unlv/",
    src: linkedin,
  },
  {
    alt: "Twitter Profile Link",
    href: "https://twitter.com/CascadeColin",
    src: twitter,
  },
];

export const footerLinks = addKeyValues(footerItems);

