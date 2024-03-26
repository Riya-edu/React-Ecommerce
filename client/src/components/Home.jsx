'use client';



import ComponentFooter from './Footer';
import ComponentCarousel from './Carousel';
import TitlebarImageList from './ImageList';
import TitlebarImageList1 from './ImageList1';
import div1 from '../assets/div1.jpg';
import div2 from '../assets/div2.jpg';
import banner2 from '../assets/banner2.jpg';



function Home() {
    return(
        <>
        
        <div className="pb-8">
        <ComponentCarousel/>
        </div>
        <img src={div1} height={50}/>
        <div className="pb-8">
        <TitlebarImageList />
        </div>
        <img src={div2} height={50}/>
        <div className="pb-8">
        <TitlebarImageList1 />
        </div>
        <img src={banner2} height={50}/>
        
        <ComponentFooter />
       
        </>

    );
}

export default Home