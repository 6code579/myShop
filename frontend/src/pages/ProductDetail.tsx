import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../component/Button";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    link?: string;
}

function deleteProduct(id: number) {
  if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

  axios
    .delete(`http://localhost:8000/products/${id}/`)
    .then(() => {
      alert("Produit supprimé avec succès !");
      // Rediriger vers la liste des produits après suppression
      window.location.href = "/"; 
    })
    .catch((err) => {
      console.error("Erreur lors de la suppression :", err);
      alert("Impossible de supprimer le produit.");
    });
}

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product>(`http://localhost:8000/products/${id}/`);
                setProduct(response.data);
            } catch (err) {
                console.error("Erreur lors du fetch:", err);
                setError("Impossible de récupérer le produit.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center text-center text-indigo-400 text-2xl h-screen">
                <p>Chargement...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center text-center text-red-500 text-2xl h-screen">
                <p>{error}</p>
            </div>
        );
    }

    if (!product) return null; 

     const handleDelete = () => {
        if (!id) return;
        deleteProduct(Number(id));
    };

    return (
        <div className="max-w-5xl p-6 flex flex-row gap-12 mt-8">
           
            <img
                src={product.link || product.image}
                alt={product.name}
                className="w-full max-h-96 object-contain mb-4 rounded-lg shadow-md"
            />
           <div className="flex flex-col ">
             <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-indigo-400">{product.price}MAD</p>
            <div className="flex flex-row gap-6 mt-6 ">
               <Button label="Supprimer" to={`/products/${product.id}`} onClick={handleDelete}/>
                <Button label="Editer" to={`/products/edit/${product.id}`} changeColor/>
            </div>
           </div>
        </div>
    );
}
