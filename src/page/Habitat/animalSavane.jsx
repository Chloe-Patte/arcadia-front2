import Footer from "../../component/utils/footer";
import Header from "../../component/utils/header";
import AnimalSavane from "../../component/habitat/animal";
import { useParams } from 'react-router-dom'

export default function SavanePage() {
    const { id } = useParams();

    return (
      <div className="bg-gray-50">
        <Header/>

        <AnimalSavane id={id}/>

        <Footer/>
      </div>
    );
}