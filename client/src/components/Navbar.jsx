
import { Navbar } from 'flowbite-react'
import logo from '../assets/logo1.png';
import lens from '../assets/lens.png';
import profile from '../assets/profile.png';
import wish from '../assets/wish.svg';
import bag from '../assets/bag.svg';
import { Container } from '@mui/material';

function ComponentNavbar() {

    return (
        <>
        <Container>
            <div style={{ width: '102%', position: 'fixed', zIndex: '9999', top: '-14px', left: '-15px', padding: '0.0rem 0rem' }}>
                <Navbar fluid rounded>
                    <Navbar className='flex text-sm font-bold text-gray-700 w-full items-center p-1 shadow-lg '>
                        <a href="">
                            <img src={logo} className="w-18 h-12 " alt="Logo" />
                        </a>
                        <span>
                        <a href='/men' className='ml-4 font-bold'>MEN</a>
                        <a href='/women' className='ml-14 font-bold'>WOMEN</a>
                        <a href='/kids' className='ml-14  font-bold'>KIDS</a>
                        
                        <Navbar.Collapse>
                            <div style={{ width: '600px' }} className='border border-gray-390  flex items-center  bg-gray-100 mt-7 ml-6 mb-6 '>
                                <img src={lens} className='ml-4  mt-1  h-5 w-5' alt="Search Icon" />
                                <input className="bg-gray-100  text-gray-900 outline-none font-normal text-sm rounded-sm block w-full p-2.5 ml-3 " placeholder='Search for Products, Brands and more' required />
                            </div>
                    

                            {/* profile dropdown */}
                            <div className='mt-5 text-xs relative' />
                            <div className="flex flex-col items-center relative group">
                                <div className="relative">
                                    <img src={profile} alt="Profile Icon" className="w-5 h-5 mt-7 ml-3 mb-1" />
                                    <span>Profile</span>
                                </div>
                                <div className="group-hover:block hidden bg-white absolute left-[-70px] mt-20 border border-gray-350 bg-gray rounded shadow-md py-6 px-1 text-sm  w-48">
                                    <div className="text-sm">
                                        <span className="block font-bold">UserName</span>
                                        <span className="block text-xs">user-mail@gmail.com</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="h-auto">
                                        <a href="/profile" className="block py-2 px-4 hover:bg-gray-100">My Profile</a>
                                        <a href="/order" className="block py-2 px-4 hover:bg-gray-100">Order</a>
                                        <a href="/wishlist" className="block py-2 px-4 hover:bg-gray-100">Wishlist</a>
                                        <a href="/returns" className="block py-2 px-4 hover:bg-gray-100">Returns & Exchanges</a>
                                        <a href="/contact" className="block py-2 px-4 hover:bg-gray-100">Contact Us</a>
                                        <hr className="my-2" />
                                        <a href="/logout" className="block py-2 px-4 hover:bg-gray-100">Logout</a>
                                    </div>
                                </div>
                            </div>


                            <div className='ml-8 mt-4 text-xs'>
                                <img src={wish} className='w-6 h-7 ml-2 mt-2' alt="Wishlist Icon" />
                                <span>Wishlist</span>
                            </div>
                            <div className='ml-4 mt-4 mr-8 text-xs'>
                                <img src={bag} className='w-6 h-6  mb-1 mt-2' alt="Bag Icon" />
                                <span>Bag</span>
                            </div>
                        </Navbar.Collapse>
                        </span>
                    </Navbar >
                </Navbar >
            </div >
            </Container>
        </>
    )

}


export default ComponentNavbar
