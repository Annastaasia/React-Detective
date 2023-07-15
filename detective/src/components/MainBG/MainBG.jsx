// import style from "./mainbg.module.scss";
import Background from "../../assets/images/main-bg-1920.png";

function MainBG() {
  return (
    <>
      <main>
        <div style={{ backgroundImage: `url(${Background})` }}></div>
      </main>
    </>
  );
}

export default MainBG;
