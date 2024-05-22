import { Link } from "react-router-dom"

const Services = () => {

    return (
        <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 class="mb-4 text-4xl font-bold">404</h1>
                <p class="text-gray-600">Oops! La page recherchée est introuvable.</p>
                <Link to="/" class="mt-4 inline-block rounded bg-jauneor px-4 py-2 font-semibold text-white hover:text-marron"> Retour </Link>
            </div>
        </div>
    )
}

export default Services
