import React from "react";
// import image logos for all 12 things
import { data } from "../../helpers/skillCardData";

export default function SkillCards() {
  return (
    <ul className="container m-auto w-3/4 flex flex-wrap">
      {data.map((obj) => {
        return (
          <li
            className="flex-skill-icon m-5"
            key={obj.id}
          >
            <h1 className="font-bold p-2 text-center">{obj.name}</h1>
            <img
              className="w-auto m-auto p-2 h-32 "
              src={obj.link}
              alt={obj.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
