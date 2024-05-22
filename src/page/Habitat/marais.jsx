import Footer from "../../component/utils/footer";
import Header from "../../component/utils/header";
import MaraisTopInfo from "../../component/habitat/marais/maraisTop";
import MaraisCardArea from "../../component/utils/cardContainer";

export default function MaraisPage() {
    return (
      <div>
        <Header/>

        <MaraisTopInfo/>
        <MaraisCardArea habitat={'marais'}/>

        <Footer/>
      </div>
    );
}