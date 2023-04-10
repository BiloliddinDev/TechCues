import Bootom from "./Components/Bottom";
import Button from "./Components/Button";
import Description from "./Components/Description";
import Elbook from "./Components/Ebook";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Information from "./Components/Information";
import Nav from "./Components/Nav";
import ShowCase from "./Components/ShowCase";
import Top from "./Components/Top";
import { useTranslation } from "react-i18next";

function App() {
  return (
    <div className="App">
      <Top />
      <Nav />
      <Hero />
      <ShowCase />
      <Elbook />
      <Information />
      <Description />
      <Footer />
      <Bootom />
    </div>
  );
}

export default App;
