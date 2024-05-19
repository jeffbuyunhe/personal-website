import CenterBody from "./components/CenterBody/center-body";
import Navigation from "./components/Navigation/navigation";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md-lg:h-[100vh]">
        <Navigation />
        <CenterBody />
      </div>
      <About />
      <Footer />
    </>
  );
}
