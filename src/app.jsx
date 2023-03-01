import Main from "./main/navigation";
import Footer from "./footer/footer";
import { footerLinks } from "./helpers/footerLinks";
import { menuList } from "./helpers/menuList";

/* TODO:

*/

// thoughts:  main needs to be a subcomponent of header?
// header will always stay the same but interacting with it will change the view for main
// therefore it should be a subcomponent

export default function App() {
  return (
    // "min-h-screen flex flex-col" required to set up sticky footer
    <div className="app min-h-screen flex flex-col">
      <Main menuList={menuList} />
      <Footer footerLinks={footerLinks} />
    </div>
  );
}
