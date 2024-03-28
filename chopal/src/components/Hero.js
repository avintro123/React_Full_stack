import React, { useEffect, useState } from 'react';
import stadium from './images/maxresdefault.jpg';

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
                <h1 className='absolute top-1/4 w-full text-center text-4xl font-bold text-[#faebd7]'>WELCOME TO <span className='text-[#22ff7e]'>CHOPAL CRICKET ASSOCIATION</span> OFFICIAL SITE.</h1>
                <div className='absolute bottom-1/4 w-full text-center'>
                    <p className='text-4xl font-bold text-[#faebd7]'>We Aim to:</p>
                    <TextRotator />
                </div>
            </div>
        </div>
    );
}

function TextRotator() {
    const [index, setIndex] = useState(0);
    const texts = ["PLAY", "BE FIT", "SUCCESSFUL"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return <p className='text-5xl font-bold text-[#22ff7e] mt-2'>{texts[index]}</p>;
}
