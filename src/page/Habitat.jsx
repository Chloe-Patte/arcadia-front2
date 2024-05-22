import { Link } from "react-router-dom";
import Footer from "../component/utils/footer";
import Header from "../component/utils/header";
import HabitatContent from "../component/habitat/habitatContent";
import HabitatContentCard from "../component/habitat/habitatContentCard";


export default function Home() {
    return (
      <div>
        <Header/>

        <HabitatContent/>
        <HabitatContentCard/>

        <Footer/>
      </div>
    );
  }