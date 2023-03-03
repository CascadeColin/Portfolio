import React from "react";
import ProjectCards from "./portfolioProjectContainer";
import { projectData } from "../../helpers/projectCards";

/* TODO: 
1) Build content to spec
*/

export default function Portfolio() {
  return (
    // "mt-24" prevents content being covered by sticky header.  If this is bugged, verify that current "mt" value matched the "h" value in navigation.jsx
    <main className="overflow-auto scroll-smooth	">
      <h1 className="text-center font-bold text-5xl my-10">
        My Projects
      </h1>
      {/* map projectData to render all cards as defined in projectData */}
      <ProjectCards projectData={projectData} />
    </main>
  );
}
