import React, { useEffect, useState } from 'react'
import stadium from './images/maxresdefault.jpg'
// import './Hero.css';

export default function Hero() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);


    return (

        <div className='mt-8'>
            <div className={`relative w-full h-screen bg-cover bg-center bg-no-repeat ${loaded ? 'opacity-60 transition-opacity duration-1000 ease-in' : 'opacity-0'}`} style={{ backgroundImage: `url(${stadium})` }}>
            </div>
            <h1 className='name'>WELCOME TO CHOPAL CRICKET ASSOCIATION OFFICIAL SITE</h1>
            <div>
            </div>
        </div>
    )
}
