import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="sticky top-0  z-10 shadow bg-gray-100" >
    {/* <header className="sticky top-0  z-10 shadow " style={{ backgroundColor: storeConfig.navBarColor }}> */}
        <div className="container mx-aujto p-6 flex justify-between">
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/free">Free</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/premium">Premium</NavLink>
                    </li>
                    <li>
                        <Link to='/cart' className='flex items-center space-x-1 hover:text-gray-900' >
                            <CartWidget />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar