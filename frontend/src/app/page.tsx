import CenterBody from "./components/CenterBody/center-body";
import Navigation from "./components/Navigation/navigation";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <CenterBody />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
