import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    link?: string;
}

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>(); 
    const [product, setProduct] = useState<Product | null>(null); 

    useEffect(() => {
        if (!id) return;

        axios
            .get(`http://127.0.0.1:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return (
        <>
        <div className="flex flex-col justify-center items-center text-center text-indigo-400 text-2xl h-screen">
            <p className="p-4">Chargement....</p>
        </div>
        </>
    )

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <img
                src={product.link || product.image}
                alt={product.name}
                className="w-full max-h-96 object-contain mb-4"
            />
            <p className="text-lg text-gray-700 mb-2">{product.description}</p>
            <p className="text-xl font-semibold text-green-600">{product.price} MAD</p>
        </div>
    );
}
