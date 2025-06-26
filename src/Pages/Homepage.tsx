import {useEffect} from 'react';
import '../Css/home.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {


    useEffect(() => {
        AOS.init({duration: 1000, once: true});
    }, []);


    return (

        <div className='HomepageContainer' data-aos="fade-up">
            <h1>VGM Composer / Producer</h1>
            <section className='musicContainer'>
                
            </section>
        </div>
    );
};
export default HomePage;