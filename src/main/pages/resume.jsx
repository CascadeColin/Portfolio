import React from "react";
import resume from "../../helpers/Resume.pdf";
import SkillCards from "./skillCards";
/* TODO: 
1) Build content to spec
*/

export default function Resume() {
  return (
    // "mt-24" prevents content being covered by sticky header.  If this is bugged, verify that current "mt" value matched the "h" value in navigation.jsx
    <main className="overflow-auto flex flex-col">
      <button type="submit"className="bg-stone-700 hover:bg-stone-600 ease-in-out duration-300 rounded-full p-3 w-28 flex justify-center mx-auto mt-3">
        <a href={resume} target="_blank" rel="noreferrer">
          <p className="font-medium">My Resume</p> 
        </a>
      </button>

      <h1 className="text-center text-3xl font-medium p-3">I offer <span className="font-extrabold">excellence</span> in these categories and am always <span className="font-extrabold">learning</span> more</h1>
      <SkillCards/>
    </main>
  );
}
