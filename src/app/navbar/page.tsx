import './navbar.css';
import Link from "next/link";
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li className='logo'>Navbar</li>
                <li className='nav-link'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='nav-link'>
                    <Link href='/product'>Product</Link>
                </li>
                <li className='nav-link'>
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}