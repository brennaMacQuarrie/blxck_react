import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function CircleButton({ triggerEvent }) {
    const container = useRef();
    const circleLeft = useRef();
    const circleRight = useRef();

    const handleClick = () => {
        triggerEvent()
    } 

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(circleLeft.current, { 
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: "linear",
            })
            gsap.to(circleRight.current, {
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: "linear",
            })
           
        }, container);
        
        return () => ctx.revert();
    }, []);

    return (
        <button onClick={() => handleClick()} ref={container} className='font-Russo text-lg flex items-center gap-2 border-[1px] border-white/20 rounded-full'>
            <img 
                ref={circleLeft}
                src={require('../../images/blxck_round_logo.png')}  
                alt='click to open our contact form' 
                className="Circle h-8 w-8"
            />
            Click here
            <img 
                ref={circleRight}
                src={require('../../images/blxck_round_logo.png')}  
                alt='click to open our contact form' 
                className="Circle h-8 w-8"
            />
        </button>
    )
}