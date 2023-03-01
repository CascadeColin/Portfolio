import React from "react";
import portrait from '../../img/portrait.png'
import SkillCards from "./skillCards";

/* TODO: 
1) Build content to spec
*/

export default function About() {
  return (
    <main className="overflow-auto">
      <img className="mx-auto xs:mt-1 xs:max-h-40 sm:mt-2 sm:max-h-52 md: mt-3 md:max-h-64" src={portrait} alt="My Portrait" />
      <h1>Hey there, my name is Colin!  I'm a <span className="font-bold">Full-Stack Web Developer</span> offering a range of solutions in <span className="font-bold">Design, API Management, Server Management, <span className="font-normal">and</span> Database Management</span>.  Here are some of my skills:</h1>
      <SkillCards/>
      {/* render subcomponent with logo for each topic (GRID?)*/}
      {/* HTML */}
      {/* CSS */}
      {/* BOOTSTRAP */}
      {/* TAILWIND CSS */}
      {/* JAVASCRIPT */}
      {/* REACTJS */}
      {/* NODEJS */}
      {/* JSON */}
      {/* EXPRESS */}
      {/* MYSQL */}
      {/* MONOGODB */}
      {/* GIT */}

    </main>
  );
}
