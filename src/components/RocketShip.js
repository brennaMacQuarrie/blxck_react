import { gsap } from 'gsap'
import { MdRocket } from 'react-icons/md';

export default function RocketShip() {
    const sendRocket = () => {
        gsap.fromTo('.Rocket', { y: 0 }, {
            y: -window.innerHeight,
            duration: 3,
            ease: "power3.in"
        });
    }
    return (
        <div className='fixed bottom-4 left-4'>
            <button className='block flex justify-center items-center' onClick={sendRocket}>
                <img 
                    src={require('../images/blxck_round_logo.png')}  
                    alt='click for a rocket ship animation!' 
                    className="h-7 w-7"
                />
                <MdRocket className='Rocket h-4 w-5 absolute top-0' />
            </button>
        </div>
    )
}