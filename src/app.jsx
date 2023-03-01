import Main from "./main/main";

import { menuList } from "./helpers/menuList";

/* TODO:

*/

// thoughts:  main needs to be a subcomponent of header?
// header will always stay the same but interacting with it will change the view for main
// therefore it should be a subcomponent

export default function App() {
  return (
    // "min-h-screen flex flex-col" required to set up sticky footer
    // "mb-32 required to prevent footer from covering content (assuming h-32 for footer)"
    <div className="parent-component">
      <Main menuList={menuList} />
      
    </div>
  );
}
