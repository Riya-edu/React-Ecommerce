import { Carousel } from 'flowbite-react'

import CW4 from './CW4.png';
import CW5 from './CW5.png';



function CarouselW1() {
    return(
        <>
        
                
                <div className='h-screen'>
                <Carousel slideInterval={4000}>
                <img src={CW4} height={30}/>
                <img src={CW5} height={30}/>
               

                  
                </Carousel>
                </div>
              
            
        </>
        )
}
export default CarouselW1;