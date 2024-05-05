import CenterText from "./components/CenterText/center-text";
import { DesktopNavigation, MobileNavigation } from "./components/Navigation/navigation";

export default function Home() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <CenterText />
    </>
  );
}
