import './HomePage.css'
import { SideNav } from '../SideNav/SideNav'
import { particlesOptions } from "../../../utils/particlesOptions"; // Import the particlesOptions object
import homeLoading from '../../../images/homeLoading.gif'
import {  useCallback } from 'react';
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Particles from "react-tsparticles";
import CompanyData from "./PageData.js"
import { Link } from "react-router-dom";


const HomePage = ({setSelectedService}) => {
    
    return (
        <div className='HomePage-Wrapper'>
            <SideNav />
            <IntroSection />
            <ServicesSection setSelectedService={setSelectedService}/>
        </div>
    )
};


const IntroSection = () => {
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    // Deals with click on get started
    const handleClick = () => {
        
    }

    return (
        <div className='IntroSection'>
            <div className='IntroSection-Wrapper hidden'>
                <div className='Text-Container'>
                    <h1 id='text-header'>Remove Your Digital Footprint</h1>
                    <p id='text-subheading'>Polish Your Online Image: Our service empowers you to effortlessly sweep away controversial or disputed comments that could impact your digital footprint. Present yourself professionally with a pristine social media history.</p>
                    <Link to="/get-started">
                        <button id='start-btn'>Get Started</button>
                    </Link>
                </div>
                <img src={homeLoading} alt='computer' id='computer-intro'/>
            </div>
            <div className="particles-container">
                <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                />
            </div>
        </div>
    )
};


const ServicesSection = ({setSelectedService}) => {
    return (
        <div className='ServiceSection'>
            <div className='ServiceSection-Wrapper hidden'>
                <h2>Services We Provide</h2>
                <div className="MediaBoxes-Container">
                    {CompanyData.map((item) => {
                        return (
                            <Link 
                                key={item.name} 
                                to={`/services/${item.name}`}
                                style={{ textDecoration: 'none', color: 'inherit' }} // Remove text decoration and inherit color
                                >
                                <SectionBox media={item} setSelectedService={setSelectedService} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};


const SectionBox = ({media, setSelectedService}) => {
    const handleClick = () => {
        setSelectedService(media);
    }

    return (
        <div className='MediaBox' onClick={handleClick}>
            <div>
                <img className='mediabox-img' src={media.img} alt='' id={media.name}/>
            </div>
            <h3 id="service-company-name">{media.name}</h3>
            <p id="service-company-desc">{media.description}</p>
        </div>
    )
};

const AboutSection = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export {HomePage};