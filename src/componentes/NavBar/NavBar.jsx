import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo'
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';

const NavBar = () => {

    const auth = useAuth();
    const { displayName = null, email } = auth.user || {};

    const handleLogout = () => {  auth.logout() };  

    return (
        <header className="sticky top-0 z-10 shadow bg-gray-100" >
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="w-screen-xl flex flex-wrap items-center justify-evenly sm:justify-center sm:items-center md:justify-around mx-auto p-4 px-10">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <div className="" id="navbar-default">
                        <ul className="font-medium flex border-gray-100 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0  dark:text-white dark:border-gray-700">
                            <li>
                                <NavLink to="/categoria/free">Free</NavLink>
                            </li>
                            <li>
                                <NavLink to="/categoria/premium">Premium</NavLink>
                            </li>
                            <li>
                                <NavLink to="/orders">Rastreo</NavLink>
                            </li>
                            <li>
                                <Link to='/cart' className='flex' >
                                    <CartWidget />
                                </Link>
                            </li>
                            {displayName ? (<li className="flex gap-4"> {displayName}<ArrowRightEndOnRectangleIcon onClick={() => handleLogout()} className="w-7 h-7 cursor-pointer"/></li>) : email ? (<li className="flex gap-4"> {email}<ArrowRightEndOnRectangleIcon onClick={() => handleLogout()} className="w-7 h-7 cursor-pointer"/></li>) : (<NavLink to="/login">Ingresar</NavLink>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar

