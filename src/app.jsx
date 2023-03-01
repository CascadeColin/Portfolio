import Main from "./main/main";

import { menuList } from "./helpers/menuList";

/* TODO:

*/

// thoughts:  main needs to be a subcomponent of header?
// header will always stay the same but interacting with it will change the view for main
// therefore it should be a subcomponent

export default function App() {
  return (
    <div className="parent-component h-full m-0">
      <Main menuList={menuList} />
    </div>
  );
}
