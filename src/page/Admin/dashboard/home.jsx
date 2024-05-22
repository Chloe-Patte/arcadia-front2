import DashboardHome from "../../../component/dashboard/dashboardHome";
import DashboardMenu from "../../../component/dashboard/utils/dashboardMenu";
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const cookies = new Cookies({ path: '/' });

    const isLoggedIn = cookies.get('login');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/connexion');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-1/8">
                    <DashboardMenu/>
                </div>
                <div className="w-7/8">
                    <DashboardHome/>
                </div>
            </div>
        </>
    );
  }