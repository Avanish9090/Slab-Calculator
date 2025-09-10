import About from "./About"
import "./App.css";
import "./about.css";
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
