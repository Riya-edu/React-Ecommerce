'use client';



import ComponentFooter from './Footer';
import ComponentCarousel from './Carousel';
import Popular from './Popular/Popular';
import div1 from '../assets/div1.jpg';
import div2 from '../assets/div2.jpg';
import banner2 from '../assets/banner2.jpg';
import NewCollections from './New Collection/NewCollections';



function Home() {
    return(
        <>
        
        <div className="pb-8">
        <ComponentCarousel/>
        </div>
        <img src={div1} height={50} className='flex-auto justify-center items-center ml-40 mr-40 object-center relative my-28 mt-28'/>
       <Popular />
       <img src={div2} height={50} className='flex-auto justify-center items-center ml-40 mr-40 object-center relative my-28 mt-28'/>
       <NewCollections />
      
        <img src={banner2} height={50}/>
        
        <ComponentFooter />
       
        </>

    );
}

export default Home