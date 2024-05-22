import Footer from "../../component/utils/footer";
import Header from "../../component/utils/header";
import AnimalMarais from "../../component/habitat/animal";
import { useParams } from 'react-router-dom'

export default function MaraisPage() {
    const { id } = useParams();

    return (
      <div className="bg-gray-50">
        <Header/>

        <AnimalMarais id={id}/>

        <Footer/>
      </div>
    );
}