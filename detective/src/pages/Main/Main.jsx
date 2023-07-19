import MainBG from "../../components/MainBG/MainBG.jsx";
import About from "../../pages/About/About.jsx";
import FirstVisit from "../FirstVisit/FirstVisit.jsx";
import License from "../License/License.jsx";
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
      </main>
    </>
  );
}

export default Main;
