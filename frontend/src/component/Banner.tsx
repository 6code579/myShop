import React from "react";
import { Link } from "react-router-dom";
const Banner: React.FC = () => {
    return (
        <>
            {/* Main */}
            <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
                {/* Texte */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
                        Découvrez nos{" "}
                        <span className="text-indigo-600">meilleurs produits</span> pour
                        votre quotidien
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
                        Achetez facilement en ligne et profitez de la livraison rapide et
                        d’offres exclusives.
                    </p>

                    <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
                        <Link
                            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
                            to="/products"
                        >
                            Voir les produits
                        </Link>
                        <Link
                            className="text-indigo-600 bg-indigo-100 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                            to="/contact"
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </div>

                {/* Image produit */}
                <div className="mt-12 md:mt-0 md:ml-12 flex justify-center">
                    <img
                        src="banner.png"
                        alt="Produit phare"
                        className="w-[350px] md:w-[450px] lg:w-[500px]  hover:scale-105 transition duration-300 object-cover"
                    />
                </div>
            </main></>
    )
}

export default Banner;