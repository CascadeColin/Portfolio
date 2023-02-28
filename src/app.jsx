import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import "./app.css";
import { footerLinks } from "./helpers/footerLinks";
import {menuList} from "./helpers/menuList"

/* TODO:
1) Main
2) refactor Header to pass props
*/

export default function App() {
  return (
    <div className="app">
      <Header menuList={menuList} />
      <Main />
      <Footer footerLinks={footerLinks} />
    </div>
  );
}
