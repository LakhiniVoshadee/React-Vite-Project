import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Projects} from "../../pages/projects/Projects.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";

export function MainContent() {
    return (
        <div className="mainContent">
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/about" element={<About/>}></Route>
               <Route path="/projects" element={<Projects/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>
           </Routes>
        </div>
    );
}