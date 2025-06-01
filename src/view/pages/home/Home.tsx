import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
};
export function Home() {
    const [products, setProducts] = useState<ProductData[]>([]); // Initialize products state
    useEffect(() => {
        //to get data
       const fetchData = async () => {
          try{
              const response= await fetch('./product-data.json');
              const jsonData= await response.json();
            /*  console.log(jsonData);*/
              setProducts(jsonData); // Set the products state with fetched data
           /*   console.log(jsonData);*/
          }catch (error) {
              console.error('Error fetching data:', error);
          }
       }
       fetchData();
    }, []);
    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                {
                    products.map((product) => (
                      <Product key={product.id} data={product}/>
                    ))
                }

            </div>
        </div>
    );
}