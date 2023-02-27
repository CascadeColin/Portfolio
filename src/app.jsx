import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
