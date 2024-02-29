import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo'
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { ArrowRightEndOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';



const NavBar = () => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => { setOpen(!open) };

    const auth = useAuth();
    const { displayName = null, email } = auth.user || {};

    const handleLogout = () => { auth.logout() };

    return (
        <header className="sticky top-0 z-10 shadow bg-gray-100" >
            <nav className="bg-white border-gray-200 dark:bg-gray-900 flex flex-col md:block">
                <div className="w-screen-xl flex justify-between md:items-center md:justify-around mx-full p-4 px-10">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <div className="hidden md:block" >
                        <ul className="font-medium flex border-gray-100 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 justify-center items-center  dark:text-white dark:border-gray-700">
                            <li >
                                <NavLink to="/categoria/free">Free</NavLink>
                            </li>
                            <li >
                                <NavLink to="/categoria/premium">Premium</NavLink>
                            </li>
                            <li >
                                <NavLink to="/orders">Rastreo</NavLink>
                            </li>
                            <li className="flex lg:flex-row md:flex-col justify-center items-center">
                                <Link to='/cart' >
                                    <CartWidget />
                                </Link>
                                {displayName ? (<div className="flex gap-4"> {displayName}<ArrowRightEndOnRectangleIcon onClick={() => handleLogout()} className="w-7 h-7 cursor-pointer" /></div>) : email ? (<div className="flex gap-4"> {email}<ArrowRightEndOnRectangleIcon onClick={() => handleLogout()} className="w-7 h-7 cursor-pointer" /></div>) : (<NavLink to="/login">Ingresar</NavLink>)}

                            </li>
                        </ul>
                    </div>
                    <div className='flex md:hidden'>
                        <button className='text-white inline-flex items-center' onClick={() => { handleToggle(open) }}>
                            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {open ?
                    <div className='md:hidden'>
                        <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <ul className=" dark:text-white dark:border-gray-700">
                                <li className='flex justify-center items-center my-2 hover:bg-gray-700' >
                                    <NavLink to="/categoria/free">Free</NavLink>
                                </li>
                                <li className='flex justify-center items-center my-2 hover:bg-gray-700' >
                                    <NavLink to="/categoria/premium">Premium</NavLink>
                                </li>
                                <li className='flex justify-center items-center my-2 hover:bg-gray-700' >
                                    <NavLink to="/orders">Rastreo</NavLink>
                                </li>
                                <li className="flex flex-col justify-center items-center ">
                                    <Link to='/cart' >
                                        <CartWidget />
                                    </Link>
                                    {
                                        displayName ?
                                            (
                                                <div className="flex flex-col justify-center items-center gap-4 my-2 "> {displayName}<ArrowRightEndOnRectangleIcon onClick={() => handleLogout()} className="w-7 h-7 cursor-pointer" /></div>
                                            )
                                            :
                                            email ?
                                                (
                                                    <div className="flex flex-col justify-center items-center gap-4"> {email}<ArrowRightEndOnRectangleIcon onClick={() => handleLogout()} className="w-7 h-7 cursor-pointer" /></div>
                                                )
                                                :
                                                (
                                                    <NavLink to="/login">Ingresar</NavLink>
                                                )
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                    : null
                }
            </nav>
        </header>
    )
}

export default NavBar

