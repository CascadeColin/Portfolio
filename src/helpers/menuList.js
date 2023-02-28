import { addKeyValues } from "./addKeyValue";

const menuNames = [
  {
    name: "Home",
  },
  {
    name: "About me",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Contact me",
  },
  {
    name: "Resume",
  },
];

export const menuList = addKeyValues(menuNames);

