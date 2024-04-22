'use client';



import ComponentFooter from './Footer';
import ComponentCarousel from './Carousel';
//import Popular from './Popular/Popular';
import div1 from '../assets/div1.jpg';
import div2 from '../assets/div2.jpg';
import banner2 from '../assets/banner2.jpg';



function Home() {
    return(
        <>
        
        <div className="pb-8">
        <ComponentCarousel/>
        </div>
      
       {/*<Popular />*/}
       <img src={div1} height={50}/>
        <img src={div2} height={50}/>
       
        <img src={banner2} height={50}/>
        
        <ComponentFooter />
       
        </>

    );
}

export default Home