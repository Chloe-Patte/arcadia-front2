import Cards from "./card";

const CardContainer = (props) => {

    return (
        <div class={`w-full pb-16`}>
            <h2 className="text-2xl text-vertfonce max-w-4xl ml-4 md:mx-auto">Nos pensionnaires</h2>
            <Cards habitat={props.habitat}/>
        </div>
    )
}

export default CardContainer
