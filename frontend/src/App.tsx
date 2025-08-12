import {
  useEffect,
  useState
} from 'react'
import axios from 'axios'

function App() {
  const [product, setProducts] = useState<Product[]>([])

  interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
    link: string;
  }

  useEffect(() => {
    const productsList = 'http://localhost:8000/products/'
    axios.get<Product[]>(productsList)
      .then(response => setProducts(response.data))
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 " > {
        product.map((element, index) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden"
            key={
              index
            } >
            <img
              src={element.link ? element.link : element.image}
              alt={`${element.name} apple`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4" >
              <h3 className="text-lg font-semibold text-gray-800 mb-2" > {
                element.name
              }
              </h3>
              <p className="text-gray-600" > Prix: {
                element.price
              } Dhs
              </p>
              <span>{element.description}</span>
              <div className='flex mx-auto gap-6 items-center justify-around mt-4'>
                <button type="button" className='btn btn-primary'>Commander</button>
                <button type="button" className='btn btn-secondary'>Details</button>

              </div>
            </div >
          </div>
        ))
      } </div>
    </>
  )
}

export default App