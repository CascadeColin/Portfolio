import React from "react";

/* TODO:
1) make footer sticky so it is always available to recruiter
2) refine spacing between icons (more responsive)
*/

// NOTE:  I intentionally am keeping the footer sticky for ease of access to the links inside of it.  Recruiters and hiring managers spend VERY little time on our portfolios and I want those links to be right in their face and easy to click at all times.

export default function header({ footerLinks }) {
  // automatically updates the copyright year on January 1
  const year = new Date().getFullYear();

  return (
    // "mt-auto" required for making footer sticky
    <div className="flex-col bg-gray-500 mt-auto">
      <h1 className="flex justify-center">Made with ❤️ by Colin Marshall</h1>
      <h1 className="flex justify-center">
      © {year} All Rights Reserved
      </h1>
        <h1 className="flex justify-center">Find me on these platforms:</h1>
      <footer className="flex justify-center">
        {footerLinks.map((item) => {
          return (
            <a href={item.href} key={item.id}>
              <img className="h-10 px-5" src={item.src} alt={item.alt} />
            </a>
          );
        })}
      </footer>
    </div>
  );
}
