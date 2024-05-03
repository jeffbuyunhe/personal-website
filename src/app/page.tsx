import CenterText from "./components/center-text";
import { DesktopNavigation, MobileNavigation } from "./components/navigation";

export default function Home() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <CenterText />
    </>
  );
}
