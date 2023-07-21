import MainBG from "../../components/MainBG/MainBG.jsx";
import About from "../../pages/About/About.jsx";
import Director from "../Director/Director.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import FirstVisit from "../FirstVisit/FirstVisit.jsx";
import License from "../License/License.jsx";
import Map from "../Map/Map.jsx";
import Safety from "../Safety/Safety.jsx";
import Services from "../Services/Services.jsx";
import Youtube from "../Youtube/Youtube.jsx";

function Main() {
  return (
    <>
      <main>
        <MainBG />
        <About />
        <Services />
        <License />
        <Youtube />
        <FirstVisit />
        <Director />
        <Safety />
        <FAQ />
        <Map />
      </main>
    </>
  );
}

export default Main;
