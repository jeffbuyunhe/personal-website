import CenterBody from "./components/CenterBody/center-body";
import Navigation from "./components/Navigation/navigation";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import { NextUIProvider } from "@nextui-org/system";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col md-lg:h-[100vh]">
        <Navigation />
        <CenterBody />
      </div>
      <About />
      <Skills />
      <Contact />
      <Footer />
    </NextUIProvider>
  );
}
