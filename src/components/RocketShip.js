import { gsap } from 'gsap'
import { useState } from 'react';
import { MdRocket } from 'react-icons/md';

export default function RocketShip() {
    const [isLaunched, setIsLaunched] = useState(false);

    const sendRocket = () => {
        setIsLaunched(true)
        gsap.fromTo('.Rocket', { y: 0 }, {
            y: -window.innerHeight,
            opacity: 0.5,
            duration: 3,
            ease: "power3.in"
        });
    }
    return (
        <div className='fixed bottom-4 left-4'>
            <button className='block flex justify-center items-center rounded-full focus:outline-none focus:bg-white/40' onClick={sendRocket}>
                <img 
                    src={require('../images/blxck_round_logo.png')}  
                    alt='click for a rocket ship animation!' 
                    className="h-7 w-7"
                />
                <MdRocket className={`${isLaunched ? 'opacity-1' : 'opacity-0'} Rocket h-4 w-5 absolute top-1`} />
            </button>
        </div>
    )
}