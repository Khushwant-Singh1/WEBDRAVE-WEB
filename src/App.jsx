import StickyStackedCards from "./components/Feature";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import NavBar from "./components/Navbar";
import ServicesSection from "./components/Service";
import TextPressure from "./components/TextPressure";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-black">
      <NavBar />
      <LandingPage />
      <Marque />
      {/* <About /> */}
      <ServicesSection />
      {/* <Eyes /> */}
      <StickyStackedCards />
      {/* <Cards /> */}
      {/* <ReadyTo /> */}


        <TextPressure
          text="WEBDRAVE"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />

    </div>
  );
}

export default App;
