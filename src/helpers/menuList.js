import { addKeyValues } from "./addKeyValue";

const menuNames = [
  {
    name: "About",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Contact",
  },
  {
    name: "Resume",
  },
];

export const menuList = addKeyValues(menuNames);

