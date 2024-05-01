import { useEffect, useState, useRef } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import lens from '../assets/lens.png';
import profile from '../assets/profile.png';
import wish from '../assets/wish.svg';
import bag from '../assets/bag.svg';

function ComponentNavbar() {
    const [userEmail, setUserEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        const token = localStorage.getItem("token");

        if (storedEmail) {
            setUserEmail(storedEmail);
        }

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div style={{ width: '102%', position: 'fixed', zIndex: '9999', top: '-14px', left: '-14px', padding: '0.0rem 0rem' }}>
            <Navbar fluid rounded>
                <Navbar className='flex text-sm font-bold text-gray-700 w-full items-center p-1 shadow-lg'>
                    <Link to="/">
                        <img src={logo} className="w-18 h-12 " alt="Logo" />
                    </Link>
                    <Link to="/men" className='ml-4 font-bold'>MEN</Link>
                    <Link to="/women" className='ml-14 font-bold'>WOMEN</Link>
                    <Link to="/kids" className='ml-14 font-bold'>KIDS</Link>
                    <Navbar.Collapse>
                        <div style={{ width: '600px' }} className='border border-gray-390 flex items-center bg-gray-100 mt-7 ml-6 mb-6'>
                            <img src={lens} className='ml-4 mt-1 h-5 w-5' alt="Search Icon" />
                            <input className="bg-gray-100 text-gray-900 outline-none font-normal text-sm rounded-sm block w-full p-2.5 ml-3 " placeholder='Search for Products, Brands and more' required />
                        </div>

                        {/* profile dropdown */}
                        <div
                            className='mt-5 text-xs relative'
                            ref={dropdownRef}
                        >
                            <div
                                className="flex flex-col items-center relative"
                                onClick={toggleDropdown}
                                aria-haspopup="true"
                                tabIndex="0"
                            >
                                <div className="relative">
                                    <img src={profile} alt="Profile Icon" className="w-5 h-5 mt-2 ml-3 mb-1" />
                                    <span className="ml-1">Profile</span>
                                </div>
                                {showDropdown && (
                                    <div
                                        className="bg-white absolute left-[-70px] mt-20 border border-gray-350 bg-gray rounded shadow-md py-6 px-1 text-sm w-48"
                                        role="menu"
                                    >
                                        <div className="text-sm">
                                            <span className="block font-bold">{userEmail}</span>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="h-auto">
                                            {isLoggedIn ? (
                                                <>
                                                    <Link to="/my-profile" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">My Profile</Link>
                                                    <Link to="/order" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Order</Link>
                                                    <Link to="/wishlist" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Wishlist</Link>
                                                    <Link to="/returns" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Returns & Exchanges</Link>
                                                    <Link to="/contact" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Contact Us</Link>
                                                    <hr className="my-2" />
                                                    <Link to="/" className="block py-2 px-4 hover:bg-gray-100" onClick={handleLogout} role="menuitem">Logout</Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link to="/my-profile" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">My Profile</Link>
                                                    <Link to="/order" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Order</Link>
                                                    <Link to="/wishlist" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Wishlist</Link>
                                                    <Link to="/returns" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Returns & Exchanges</Link>
                                                    <Link to="/contact" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Contact Us</Link>
                                                    <hr className="my-2" />
                                                    <Link to="/signup" className="block py-2 px-4 hover:bg-gray-100" role="menuitem">Signup</Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='ml-8 mt-4 text-xs'>
                            <Link to="/wishlist">
                                <img src={wish} className='w-6 h-7 ml-2 mt-2' alt="Wishlist Icon" />
                                <span>Wishlist</span>
                            </Link>
                        </div>
                        <div className='ml-4 mt-4 mr-8 text-xs'>
                            <Link to="/cart">
                                <img src={bag} className='w-6 h-6 mb-1 mt-2' alt="Bag Icon" />
                                <span>Bag</span>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Navbar>
        </div>
    );
}

export default ComponentNavbar;