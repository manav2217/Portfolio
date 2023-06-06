import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header/Header";
import About from "./Components/about/about";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
import Experience from "./Components/experience/experience";
import Nav from "./Components/nav/Nav";
import Portfolio from "./Components/portfolio/portfolio";
import Services from "./Components/services/services";
import Testimonials from "./Components/testimonials/testimonials";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
