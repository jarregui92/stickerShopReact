import {Link} from "react-router-dom";
import './Logo.css'

export default function Logo(){
    return(
        <div className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="Logo" className="imgLogo"/>
            <span className="hidden md:inline-block font-extrabold text-3xl dark:text-white" >Sticker Shop</span>
        </div>
    )
}