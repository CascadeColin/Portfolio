import Main from "./main/main";
import { menuList } from "./helpers/menuList";

export default function App() {
  return (
    <div className="parent-component bg-gray-300 h-full m-0">
      <Main menuList={menuList} />
    </div>
  );
}
