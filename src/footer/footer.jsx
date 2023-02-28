import React from "react";

/* TODO:
1) refine spacing between icons (more responsive)
*/

export default function header({ footerLinks }) {
  // automatically updates the copyright year on January 1
  const year = new Date().getFullYear();

  return (
    <div className="flex-col bg-gray-500">
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
