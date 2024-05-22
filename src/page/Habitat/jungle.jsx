import Footer from "../../component/utils/footer";
import Header from "../../component/utils/header";
import JungleTopInfo from "../../component/habitat/jungle/jungleTop";
import JungleCardArea from "../../component/utils/cardContainer";

export default function JunglePage() {
    return (
      <div>
        <Header/>

        <JungleTopInfo/>
        <JungleCardArea habitat={'jungle'}/>

        <Footer/>
      </div>
    );
}