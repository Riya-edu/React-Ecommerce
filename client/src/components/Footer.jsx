'use client';

import { Footer } from 'flowbite-react';
import logo from '../assets/logo1.png';


function ComponentFooter() {
 

    return (
      <>

      
          <Footer container >
            <div className="w-full text-center bg-white">
              <div className="w-full text-black justify-between sm:flex sm:items-center sm:justify-between object-fill">
                <Footer.Brand
                  href="https://flowbite.com"
                  img src={logo}
                  alt="Clothing store Logo"
                  name="Threads"
                />
               
                <Footer.LinkGroup>
                  <Footer.Link href="#">About</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Licensing</Footer.Link>
                  <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <Footer.Divider />
              <Footer.Copyright href="#" by="Threads™" year={2024} />
            </div>
          </Footer>
        
      
      </>
    )
  }
  
  export default ComponentFooter
  