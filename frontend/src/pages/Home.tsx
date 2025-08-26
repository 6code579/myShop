import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../component/Banner";
import ImageGallery from "../component/ImageGallery";
import GalleryProducts from "../component/GalleryProducts";

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsList = "http://localhost:8000/products/";
    axios
      .get<Product[]>(productsList)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erreur lors du fetch:", error));
  }, []);

  return (
    <>
      <Banner />
      {/**image gallery */}
      <section>
        <ImageGallery />
      </section>
      <GalleryProducts
        heading="Our Latest Creations"
        description="A visual collection of our most recent works - each piece crafted with intention, emotion, and style."
        items={products}  link="#"
      />
      


    </>
  );
};

export default Home;
