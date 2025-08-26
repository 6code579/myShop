import React from "react";
import { Link } from "react-router-dom";

interface GalleryItem {
    image: string;
    price: string | number;
    description: string;
    name: string;
     link?:string;
}

interface GalleryProps {
    heading?: string;
    description?: string;
    items: GalleryItem[];
     link?: string;
}

const GalleryProducts: React.FC<GalleryProps> = ({ heading, description, items, link }) => {
    return (
        <div className="px-4 py-12">
            {/* Heading */}
            {heading && (
                <h1 className="text-3xl font-semibold text-center mx-auto">{heading}</h1>
            )}
            {description && (
                <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                    {description}
                </p>
            )}

            {/* Gallery Grid */}
            <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200 shadow-md">
                        <img
                            src={item.image ?  item.image: item.link }
                            alt={item.name}
                            className="size-56 object-cover object-top"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-xl font-bold text-sky-400">{item.price} MAD</span>
                            <h1 className="text-xl font-medium">{item.name}</h1>
                            <p>{item.description}</p>
                            {link && (
                                <Link to={link}>
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                    >
                                        Commander
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryProducts;
