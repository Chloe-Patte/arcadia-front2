import Footer from "../../component/utils/footer";
import Header from "../../component/utils/header";
import SavaneTopInfo from "../../component/habitat/savane/savaneTop";
import SavaneCardArea from "../../component/utils/cardContainer";

export default function SavanePage() {
    return (
      <div className="bg-gray-50">
        <Header/>

        <SavaneTopInfo/>
        <SavaneCardArea habitat={'savane'}/>

        <Footer/>
      </div>
    );
}