import {useEffect} from 'react';
import '../Css/home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import HomePageVideo from '../assets/Jaweazy Demo Reel.mp4';

const HomePage = () => {


    useEffect(() => {
        AOS.init({duration: 1000, once: true});
    }, []);


    return (

        <div className='HomepageContainer' data-aos="fade-up">
            <h2>Composer* Producer* Sound Designer </h2>
            <video className='homepageVideo' autoPlay loop >
                <source src={HomePageVideo} type="video/mp4"/>
            </video>
            <div className='musicContainer'>
            <h1>Thanks for stopping by! This site is being frequently updated with new content. In the meantime, please feel free to explore the other pages to check out my work!</h1>

            </div>
        </div>
    );
};
export default HomePage;