import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 shadow bg-gray-100" >
        <div className="container mx-auto p-6 flex justify-between items-center">
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <ul className='flex w-full'>
                    <li>
                        <NavLink to="/categoria/free">Free</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/premium">Premium</NavLink>
                    </li>
                    <li>
                        <Link to='/cart' className='' >
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