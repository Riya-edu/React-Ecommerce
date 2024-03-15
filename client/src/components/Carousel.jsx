
import { Carousel } from 'flowbite-react'

import banner1 from '../assets/banner1.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import banner6 from '../assets/banner6.jpg';



function ComponentCarousel() {
    return(
        <>
        
                
                <div className='h-screen'>
                <Carousel slideInterval={3000}>
                <img src={banner1} height={50}/>
                <img src={banner3} height={50}/>
                <img src={banner6} height={50}/>
                <img src={banner4} height={50}/>
                <img src={banner5} height={50}/>

                  
                </Carousel>
                </div>
              
            
        </>
        )
}
export default ComponentCarousel;