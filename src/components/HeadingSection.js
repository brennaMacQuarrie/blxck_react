import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react";

export default function HeadingSection() {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
    const moveRight = useRef();
    const moveLeft = useRef();
    const toggleActions = "restart pause resume reset"

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(moveRight.current, {
                x: -300,
                opacity: 0,
                duration: 8, 
                scrollTrigger: {
                    toggleActions,
                    scrub: true,
                },
            })
            gsap.to(moveLeft.current, {
                x: 300,
                opacity: 0,
                duration: 8, 
                scrollTrigger: {
                    toggleActions,                    
                    scrub: true,
                },
            })
        }, container);
        return () => ctx.revert();
    }, []);
    
    return ( <header ref={container} className="App-header flex flex-col items-center pt-48 md:pt-0 md:justify-center" id="home">
        <div className='px-12 sm:px-4'>
          <h1 className='text-4xl md:text-5xl font-Blackout leading-none'>
            <p ref={moveRight}>Grow your</p>
            <p ref={moveLeft}>brand</p>
          </h1>
          {/* <h2 className="text-xl md:text-2xl font-Russo tracking-wider">Digital Strategy <span className='white-stroke font-bold'>//</span> Marketing</h2> */}
        </div>
      </header>
    )
}