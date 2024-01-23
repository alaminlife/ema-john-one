import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';



const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header/>
                
        {/*the-best ad */}
                <div className="the-best-ad">
                    <div className=""></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}

                <div className="hero-text">
                    <div className="">
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>

                    <div className="">
                        <span>Ideal body</span>
                    </div>

                    <div className='span'>
                        <span>
                        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century 
                        </span>
                    </div>

                </div>
            {/* figures */}
                <div className="figures">
                        <div className="one1">
                            <span>+140 </span>
                            <span>expert coachsk</span>
                        </div>
                        <div className="one2">
                            <span>+978 </span>
                            <span>members joined</span>
                        </div>
                        <div className="one3">
                            <span>+50 </span>
                            <span>fitness programs</span>
                        </div>
                </div>
                {/* Hero button */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Leaen More</button>
                </div>

            </div>


            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={Heart}alt=''/>
                    <span>Heart Rate</span> <span>116 bpm</span>
                </div>

                {/* hero image */}
                <img src={hero_image} alt='' className='hero-image'/>
                <img src={hero_image_back} alt='' className='hero-image-back'/>

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt=''/>
                    
                        <div className="">
                            <span>Calories Burned</span>
                            <span>220 Kcal</span>
                        </div>
                </div>
            
            </div>
        </div>
    )
}

export default Hero;