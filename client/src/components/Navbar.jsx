import logo1 from '../assets/logo1.png'
import profile from '../assets/profile.png';
import wish from '../assets/wish.svg';
import bag from '../assets/bag.svg';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function ComponentNavbar() {
        return (
            <>
            <div style={{ width: '102%', position: 'fixed', zIndex: '9999', top: '-14px', left: '-14px', padding: '0.0rem 0rem' }}>
                <Navbar fluid rounded>
                    <Navbar className='flex text-sm font-bold text-gray-700 w-full items-center p-1 shadow-lg'>
                        <Link to="/">
                            <img src={logo1} className="w-18 h-12 " alt="Logo" />
                        </Link>
                        <Link to="/men" className='ml-4 font-bold'>MEN</Link>
                        <Link to="/women" className='ml-14 font-bold'>WOMEN</Link>
                        <Link to="/kids" className='ml-14 font-bold'>KIDS</Link>
                        <Navbar.Collapse> 
                          {/* profile dropdown */}
                          <div className='mt-5 text-xs relative'>
                          <div className="flex flex-col items-center relative group">
                              <div className="relative">
                                  <img src={profile} alt="Profile Icon" className="w-5 h-5 mt-2 ml-3 mb-1" />
                                  <span className="ml-1">Profile</span>
                              </div>
                              <div className="group-hover:block hidden bg-white absolute left-[-70px] mt-20 border border-gray-350 bg-gray rounded shadow-md py-6 px-1 text-sm w-48">
                                  <div className="text-sm">
                                      <span className="block font-bold">UserName</span>
                                      <span className="block text-xs">user-mail@gmail.com</span>
                                  </div>
                                  <hr className="my-2" />
                                  <div className="h-auto">
                                      <Link to="/profile" className="block py-2 px-4 hover:bg-gray-100">My Profile</Link>
                                      <Link to="/order" className="block py-2 px-4 hover:bg-gray-100">Order</Link>
                                      <Link to="/wishlist" className="block py-2 px-4 hover:bg-gray-100">Wishlist</Link>
                                      <Link to="/returns" className="block py-2 px-4 hover:bg-gray-100">Returns & Exchanges</Link>
                                      <Link to="/contact" className="block py-2 px-4 hover:bg-gray-100">Contact Us</Link>
                                      <hr className="my-2" />
                                      <Link to="/logout" className="block py-2 px-4 hover:bg-gray-100">Logout</Link>
                                  </div>
                              </div>
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
    </>
  )
}

export default ComponentNavbar