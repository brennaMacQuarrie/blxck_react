import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function CircleButton({ triggerEvent }) {
    const container = useRef();
    const circle1 = useRef();
    const circle2 = useRef();

    const handleClick = () => {
        triggerEvent()
    } 

    useLayoutEffect(() => {
        const circles = [
            circle1.current,
            circle2.current,
          ];
        let ctx = gsap.context(() => {
            gsap.to(circles, { 
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: "linear",
            })
        }, container);
        
        return () => ctx.revert();
    }, []);

    return (
        <button onClick={() => handleClick()} ref={container} className='font-SpaceAge text-base sm:text-lg flex items-center gap-2 border-[1px] border-white/20 rounded-full bg-white/20 hover:bg-white/40 transition-bg duration-300 z-20'>
            <img 
                ref={circle1}
                src="./blxck_round_logo.png" 
                alt='click to open our contact form' 
                className="Circle h-8 w-8"
            />
            click here
            <img 
                ref={circle2}
                src="./blxck_round_logo.png" 
                alt='click to open our contact form' 
                className="Circle h-8 w-8"
            />
        </button>
    )
}