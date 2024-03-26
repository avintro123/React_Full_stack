import React, { useEffect, useState } from 'react';
import stadium from './images/maxresdefault.jpg';
// import Typed from "react-typed";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <div className='mt-8 relative'>
            <div className={`relative w-full h-screen bg-cover bg-center bg-no-repeat ${loaded ? 'opacity-100 transition-opacity duration-1000 ease-in' : 'opacity-0'}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${stadium})` }}>
                <h1 className='w-full h-screen flex justify-center items-center text-center text-4xl font-bold text-[#faebd7] z-12 relative top-1/3'>WELCOME TO CHOPAL CRICKET ASSOCIATION OFFICIAL SITE.</h1>
                <p className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-center text-4xl font-bold text-[#faebd7]'>We Aim to: </p>
                {/* <Typed
                    className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                    strings={["PLAY", "FIT", "SUCCESS"]}
                    typeSpeed={115}
                    backSpeed={135}
                    loop
                /> */}
            </div>
            <div>
            </div>
        </div>
    );
}
