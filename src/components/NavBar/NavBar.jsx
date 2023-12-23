import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '/images/logo.svg'

const Navbar = () => {
  return (
    <>
        <header>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
                <h1>Sticker Shop</h1>
            </div>
            <nav>
                <ul>
                    <li>Stickers</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li className='liCart'>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar