import {Link} from "react-router-dom";
//import storeConfig from "src/pages/api/storeConfig"
import './Logo.css'

export default function Logo(){
    return(
        <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="Logo"/>
            {/* <img src={storeConfig.storeLogo} alt="Logo" width={42} height={42} /> */}
            {/* <span className="hidden sm:inline-block font-extrabold text-3xl " style={{color: storeConfig.navBarTextColor}}>{storeConfig.storeName}</span> */}
            <span className="hidden sm:inline-block font-extrabold text-3xl " >Sticker Shop</span>
        </Link>
    )
}