import Footer from "../component/utils/footer";
import Header from "../component/utils/header";
import AvisContainer from "../component/avis/avisContainer";
import Caroussel from "../component/caroussel/carousselFeatured";
import News from "../component/news/newsFeatured";
import Habitat from "../component/habitat/habitatFeatured";
import Service from "../component/service/serviceFeatured";


export default function Home() {
    return (
      <div>
        <Header/>

        <Caroussel/>
        <News/>
        <Habitat/>
        <Service/>
        <AvisContainer/>

        <Footer/>
      </div>
    );
  }