
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import Connexion from "./login";

const Dashboard = () => {
    const navigate = useNavigate();
    const cookies = new Cookies({ path: '/' });

    const isLoggedIn = cookies.get('login');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/connexion');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            {isLoggedIn ? (
                navigate('/dashboard/home')
            ) : (
                <Connexion/>
            )}
        </div>
    );
};

export default Dashboard;
