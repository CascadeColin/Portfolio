import React, { useState, useEffect, useRef } from "react";
// set screen size options with react-responsive
import MediaQuery, { useMediaQuery } from "react-responsive";
import menuImg from "../img/light-hamburger.png";
import portrait from "../img/menuImg.png";

/* TODO:
1) make buttons clickable
2) refine UI on PC
3) change font
3) finishing touches
4) refactor
*/

export default function Header({ menuList }) {
  // sets default state of dropdown menu to be closed
  const [open, setOpen] = useState(false);

  // reference for making the mobile dropdown menu usable
  const menuRef = useRef(null);

  // logic that allows for hooks to be used only at certain device sizes
  const isPhone = useMediaQuery({ query: "(max-width: 639px)" });

  // handles the dropdown menu on mobile
  useEffect(() => {
    if (isPhone) {
      const eventHandler = (e) => {
        // allows for the dropdown menu to be closed by clicking anywhere on the page
        if (!menuRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", eventHandler);
      return () => {
        document.removeEventListener("mousedown", eventHandler);
      };
    } else {
      return;
    }
  });

  return (
    <div>
      {/* if screen size is 639px or less */}
      <MediaQuery maxWidth={639}>
        <div className="bg-blue-500 h-24 flex justify-between">
          <h3 className="absolute top-5 left-5 text-3xl font-medium leading-7">
            Colin Marshall
            <br />
            <span className="text-2xl font-medium">Web Developer</span>
          </h3>
          <img
            className="absolute h-16 w-16 top-5 right-24"
            src={portrait}
            alt="Portrait"
          />
          {/* onClick toggles boolean switch */}
          <div className="menu-container" ref={menuRef}>
            <div
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                className="absolute top-7 right-7 h-10 w-10 overflow-hidden cursor-pointer"
                src={menuImg}
                alt="Menu Button"
              />
            </div>
            <div className={`dropdown absolute top-24 right-5 bg-gray-500 pt-2 pr-5 before:content-[''] before:absolute before:-top-1 before:right-5 before:h-5 before:w-5 before:bg-gray-500 before:rotate-45 ${open ? "active opacity-100 visible translate-y-0 duration-500" : "inactive opacity-0 invisible -translate-y-3 duration-500"}`}>
              <ul>
                {menuList.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </MediaQuery>
      {/* if screen size is 640px or more */}
      <MediaQuery minWidth={640}>
        <div className="bg-blue-500 h-16">
          <h1 className="text-white absolute font-medium left-3 top-3 text-3xl">Colin Marshall</h1>
          <button>Home</button>
          <button>About Me</button>
          <button>Portfolio</button>
          <button>Contact</button>
          <button>Resume</button>
        </div>
      </MediaQuery>
    </div>
  );
}
