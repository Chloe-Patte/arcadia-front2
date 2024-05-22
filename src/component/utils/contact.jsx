import { Link } from "react-router-dom"
import React, { useState } from 'react';

const Contact = () => {
    
    let minHeight = 0.8 * window.innerHeight;
    console.log(minHeight)

    return (
        <div style={{height: minHeight}} className={`flex flex-grow mt-10 mb-10 items-center justify-center bg-gray-50`}>
            <section className="bg-white p-8 pt-8 pb-8 rounded-xl border-2 shadow-xl">
                <div className="py-4 lg:py-1 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-vertfonce">Contactez-nous</h2>
                    <p className="mb-6 lg:mb-12 font-light text-center text-gray-500 sm:text-xl">
                        Vous avez besoin d'informations complémentaires au sujet du zoo, de nos services ou de 
                        nos tarifs ? Posez nous vos questions via ce formulaire, nous vous répondrons dans les plus brefs délais.</p>
                    <form action="#" className="space-y-6">
                        <div>
                            <label for="subject" className="block mb-2 text-sm text-left font-medium text-gray-900">Sujet</label>
                            <input type="text" id="subject" clasNames="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Sujet de votre demande" required/>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm text-left font-medium text-gray-900">Adresse e-mail</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Votre adresse e-mail" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm text-left font-medium text-gray-900">Votre message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Écrivez votre message ici"></textarea>
                        </div>
                        <Link className="text-gray-600" to={"/"}>Annuler</Link>
                        <button type="submit" className="py-3 px-5 ml-6 bg-jauneor text-sm font-medium text-center text-white 
                        rounded-lg bg-primary-700 sm:w-fit hover:text-marron">Envoyer</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
