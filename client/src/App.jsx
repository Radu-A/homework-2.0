// import "./App.css";
import "./style/style.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./structure/Footer/Footer";
import Header from "./structure/Header/Header";
import Main from "./structure/Main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
