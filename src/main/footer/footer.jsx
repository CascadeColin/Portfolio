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
    // Update "margin bottom" for App component if "height" value is changed here - prevents sticky footer covering content
    <footer className="flex-col bg-gray-500 fixed bottom-0 w-full h-32">
      <h1 className="flex justify-center">Made with ❤️ by Colin Marshall</h1>
      <h1 className="flex justify-center">
      © {year} All Rights Reserved
      </h1>
        <h1 className="flex justify-center">Find me on these platforms:</h1>
      <div className="flex justify-center">
        {footerLinks.map((item) => {
          return (
            <a href={item.href} key={item.id}>
              <img className="h-10 px-5" src={item.src} alt={item.alt} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
