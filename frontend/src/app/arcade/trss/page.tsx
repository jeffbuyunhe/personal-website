import { Suspense } from "react";
import Search from "./components/search";

export default function Trss() {
  return (
    <Suspense fallback={null}>
      <Search />
    </Suspense>
  );
}
