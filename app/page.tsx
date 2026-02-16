import Navbar from "./components/shared/navbar/Navbar";
import HeroBanner from "./components/unshared/HeroBanner/HeroBanner";
import SectionOne from "./components/unshared/SectionOne/SectionOne";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <SectionOne/>
    </>
  );
}
