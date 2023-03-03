import Main from "./main/main";
import { menuList } from "./helpers/menuList";

export default function App() {
  return (
    <div className="parent-component text-white bg-stone-800 h-full m-0">
      <Main menuList={menuList} />
    </div>
  );
}
