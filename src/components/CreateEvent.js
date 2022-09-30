import React from 'react';
import { Link } from 'react-router-dom';

const CreateEvent = () => {
    return (
        <div className='flex h-screen justify-center items-center mt-20'>
            <div className="card w-72 lg:w-96 bg-secondary shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-primary text-2xl lg:text-4xl font-bold">Create Event</h2>
                    <form >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Event name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Event name"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Host name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Host name"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Start Time</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Start Time"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">End Time</span>
                            </label>
                            <input
                                type="date"
                                placeholder="End Time"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Event Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Event Photo URL"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>

                        <Link to='/event'><input className='btn w-full max-w-xs mt-5 btnColour text-xl border-0 text-white' type="submit" value="Next" /></Link>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default CreateEvent;