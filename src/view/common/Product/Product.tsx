import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}
type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*',{
    eager: true, import: 'default'
});

export function Product({data}: ProductProps) {
    //console.log(images);
    console.log(`../../../assets/products/${data.image}`);

    const image =images[`../../../assets/products/${data.image}`] ;

    const [isActive, setIsActive] = useState(false);

    const addToCart = () => {
        // Logic to add the product to the cart
        setIsActive(true);
        console.log(`Adding ${data.name} to cart`);

    }

    return (
        <div>
            <div
                className="w-full max-w-[250px] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mx-2 mb-4 hover:rotate-12">
                <div className="flex flex-col items-center p-4">
                    <img
                        className="h-24 w-24 object-cover rounded-md"
                        src={image}
                        alt="Perfume"
                    />
                    <div className="flex items-center justify-between w-full mt-3">
                        <h3 className="text-gray-800 text-sm font-semibold">{data.name}</h3>
                        <div className="bg-yellow-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
                            <span>{data.price} <small>{data.currency}</small></span>
                        </div>
                    </div>
                    {
                        isActive ? (
                            <ModifyCart data={{product: data}}/>
                        ) : (
                            <button
                                className="mt-4 bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-820 focus:outline-none
                        focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm font-medium" onClick={addToCart}>
                                Add to Cart
                            </button>
                        )

                    }
                </div>
            </div>
        </div>
    );
}