
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productSlice.ts";
import {useEffect} from "react";

/*type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
};*/

export function Home() {

   const dispatch=  useDispatch<AppDispatch>();

   const {list} = useSelector((state: RootState) => state.products);

    /*const [products, setProducts] = useState<ProductData[]>([]); // Initialize products state*/

    useEffect(() => {
        //to get data
     /*  const fetchData = async () => {
          try{
              const response= await fetch('./product-data.json');
              const jsonData= await response.json();
            /!*  console.log(jsonData);*!/
              setProducts(jsonData); // Set the products state with fetched data
           /!*   console.log(jsonData);*!/
          }catch (error) {
              console.error('Error fetching data:', error);
          }
       }
       fetchData();*/

        //to dispatch data
        dispatch(getAllProducts());


    }, []);
    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                {
                    list.map((product) => (
                      <Product key={product.id} data={product}/>
                    ))
                }

            </div>
        </div>
    );
}