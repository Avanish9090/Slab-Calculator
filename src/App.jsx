import About from "./about";
import "./App.css";
import "./About.css";
import Header from "./Header";
import Detail, { Rmc } from "./Detail";
import Manual from "./Manual";
import Footer from "./Footer";
import Contact from "./Contact";
function App() {
  return (
    <>
      <Header />
      <About />
      <Detail />
      <Rmc />
      <Manual />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
