import React from 'react';
import { Link } from 'react-router-dom';
import partyImage from '../assets/landingImage.png';
import './Leandingpage.css'

const LeandingPage = () => {
    return (
        <div class="hero min-h-screen bg-secondary lg:px-40">
            <div class="hero-content  lg:flex-row md:flex-col-reverse flex-col-reverse lg:gap-40">
                <img src={partyImage} class="max-w-sm rounded-lg" />
                <div className='text-center lg:text-right'>
                    <h1 class="text-4xl lg:text-6xl font-bold"><span className='text-primary'>Imagine If </span><br />
                        <span className='text-4xl lg:text-6xl gradiant'> SnapChat </span> <br />
                        <span className='text-primary'>had events</span>
                    </h1>
                    <p class="py-6 text-lg lg:text-2xl ">Easily host and share events  with your friends across any social media </p>
                    <Link to='/create'><button class="btn btnColour border-0 text-white text-xl"> Create my event</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LeandingPage;