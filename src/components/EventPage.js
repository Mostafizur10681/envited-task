import React from 'react';
import birthdayCake from '../assets/Birthday cake.png'
import { FaRegCalendarAlt , FaMapMarkerAlt} from "react-icons/fa";


const EventPage = () => {
    return (
        <div class="hero min-h-screen bg-secondary">
            <div class="hero-content flex-col lg:flex-row-reverse lg:px-60 lg:gap-16">
                <img src={birthdayCake} class="max-w-sm rounded-lg " />
                <div>
                    <h1 class="lg:text-5xl text-3xl font-bold text-primary">Birthday Bash</h1>
                    <p class="py-6 text-sm lg:text-lg ">Hosted by Elysia</p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <FaRegCalendarAlt className='fontAwesome'></FaRegCalendarAlt>
                        </div>
                        <div >
                            <div>
                                <h4 className='text-base lg:text-lg font-bold text-primary'>18 August 6:00PM</h4>
                                <p className='text-sm lg:text-lg'>to 19 August 1:00PM UTC + 10</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center gap-5 mt-11'>
                        <div>
                            <FaMapMarkerAlt className='fontAwesome'></FaMapMarkerAlt>
                        </div>
                        <div >
                            <div>
                                <h4 className='text-base lg:text-lg font-bold text-primary'>State Name</h4>
                                <p className='text-sm lg:text-lg'>Suburb, State, Postcode</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;