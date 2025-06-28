import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Projects} from "../../pages/projects/Projects.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";


export function MainContent() {
    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/about" element={<About/>}></Route>
               <Route path="/projects" element={<Projects/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>
               <Route path="/shopping-cart" element={<ShoppingCart/>}></Route>
           </Routes>
        </div>
    );
}