import CenterBody from "./components/CenterBody/center-body";
import Navigation from "./components/Navigation/navigation";
import About from "./components/About/about";

export default function Home() {
  return (
    <>
      <Navigation />
      <CenterBody />
      <About />
    </>
  );
}
