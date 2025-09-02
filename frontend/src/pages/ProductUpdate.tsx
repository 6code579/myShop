import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  link?: string;
}

export default function ProductEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération du produit
  useEffect(() => {
    if (!id) return;
    const productId = Number(id);
    if (isNaN(productId)) return setError("ID produit invalide");

    axios
      .get<Product>(`http://localhost:8000/products/${productId}/`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error(err);
        setError("Impossible de récupérer le produit.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Gestion des champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!product) return;
    const value = e.target.name === "price" ? Number(e.target.value) : e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  // Mise à jour du produit
  const handleUpdate = () => {
    if (!product) return;

    const { id: productId, ...data } = product;
    axios
      .put(`http://localhost:8000/products/${productId}/`, data)
      .then(() => {
        alert("Produit mis à jour !");
        navigate(`/products/${productId}`);
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour :", err.response?.data || err.message);
        alert("Impossible de mettre à jour le produit.");
      });
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Produit non trouvé.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Modifier le produit</h1>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleUpdate}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Enregistrer
      </button>
    </div>
  );
}
