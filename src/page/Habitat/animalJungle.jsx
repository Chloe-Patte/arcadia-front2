import Footer from "../../component/utils/footer";
import Header from "../../component/utils/header";
import AnimaJungle from "../../component/habitat/animal";
import { useParams } from 'react-router-dom'

export default function JunglePage() {
    const { id } = useParams();

    return (
      <div className="bg-gray-50">
        <Header/>

        <AnimaJungle id={id}/>

        <Footer/>
      </div>
    );
}