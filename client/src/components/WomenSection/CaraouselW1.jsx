import { Carousel } from 'flowbite-react'

import CW1 from './CW1.jpg';
import CW2 from './CW2.jpg';
import CW3 from './CW3.jpg';


function CarouselW1() {
    return(
        <>
        
                
                <div className='h-screen'>
                <Carousel slideInterval={2000}>
                <img src={CW1} height={50}/>
                <img src={CW2} height={50}/>
                <img src={CW3} height={50}/>

                  
                </Carousel>
                </div>
              
            
        </>
        )
}
export default CarouselW1;