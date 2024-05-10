import CenterText from "./components/CenterText/center-text";
import { DesktopNavigation, MobileNavigation } from "./components/Navigation/navigation";
import Portrait from "./components/Portrait/portrait";

export default function Home() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <div className="row items-center">
        <div className="col-6">
          <CenterText />
        </div>
        <div className="col-6">
          <Portrait />
        </div>
      </div>
    </>
  );
}
