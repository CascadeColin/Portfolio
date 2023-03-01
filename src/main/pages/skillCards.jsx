import React from "react";
// import image logos for all 12 things
import {data} from '../../helpers/skillCardData'

export default function SkillCards() {
  return (
    <ul className="container m-auto w-3/4 flex flex-wrap">
      {data.map((obj) => {
        return (
          <li className="flex-skill-icon flex-col items-center" key={obj.id}>
            <img className="w-auto h-32" src={obj.link} alt={obj.name} />
            <p>{obj.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
