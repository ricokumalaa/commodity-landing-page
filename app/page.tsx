import HeroBanner from "./components/unshared/HeroBanner/HeroBanner";
import SectionOne from "./components/unshared/SectionOne/SectionOne";
import SectionTwo from "./components/unshared/SectionTwo/SectionTwo";
import SectionThree from "./components/unshared/SectionThree/SectionThree";
import SectionFour from "./components/unshared/SectionFour/SectionFour";
import SectionFive from "./components/unshared/SectionFive/SectionFive";

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </>
  );
}
