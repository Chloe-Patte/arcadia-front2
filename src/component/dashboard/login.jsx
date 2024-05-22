import { Link, useNavigate } from "react-router-dom"
import bcrypt from 'bcryptjs';
import React, {useEffect, useState} from "react";
import Cookies from 'universal-cookie';

const Login = () => {

    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [hashedPassword, setHashedPassword] = useState('');
    const cookies = new Cookies(null, { path: '/' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        setHashedPassword(hash);

        const response = await fetch(`https://arcadia-back2.onrender.com/user/${mail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const userData = await response.json();

        if (!userData || !userData.mdp) {
            console.log("User not found!");
            return;
        }

        const isMatch = await bcrypt.compare(password, userData.mdp);

        if (isMatch) {
            cookies.set('login', true);
            navigate('/dashboard/home');
        } else {
            // Gérer le cas où le mot de passe est incorrect
        }
    };

    const isLoggedIn = cookies.get('login');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/dashboard/home');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            <div class="w-20 h-20 ml-6 mt-2">
                <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" class="h-20" alt="Arcadia Logo"/>
                </Link>
            </div>
            <div class="py-4 lg:py-1 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-vertfonce">
                    Se connecter à l'espace administrateur
                </h2>
                <p>
                    Pour vous connecter vous devez être l'un de nos collaborateurs. Si ce n'est pas le cas, vous 
                    pouvez rejoindre la page d'accueil  
                    <Link to="/" class="text-jauneor hover:underline hover:font-semibold">
                        {" en cliquant ici."}
                    </Link>
                </p>
                <form method="POST" onSubmit={handleRegister} class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 mt-6 text-sm text-left font-medium text-gray-900">
                            Adresse e-mail
                        </label>
                        <input 
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                            type="email" 
                            id="email" 
                            name="email" 
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " 
                            placeholder="Votre adresse e-mail"/>
                    </div>
                    <div>
                        <label for="mdp" class="block mb-2 text-sm text-left font-medium text-gray-900">
                            Mot de passe
                        </label>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password" 
                            id="password" 
                            name="password" 
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " 
                            placeholder="Votre mot de passe"/>
                    </div>
                    <p class="text-center">
                        <button type="submit" name="valider" class="py-3 px-5 ml-6 bg-jauneor text-sm font-medium 
                            text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 
                            focus:outline-none focus:ring-primary-300">
                            Se connecter
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;