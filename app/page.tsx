import Navbar from "./components/shared/navbar/Navbar";
import HeroBanner from "./components/unshared/HeroBanner/HeroBanner";
import SectionOne from "./components/unshared/SectionOne/SectionOne";
import SectionTwo from "./components/unshared/SectionTwo/SectionTwo";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <SectionOne/>
      <SectionTwo/>
    </>
  );
}
