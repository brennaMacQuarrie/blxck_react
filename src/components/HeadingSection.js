import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react";

export default function HeadingSection() {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
    const moveRight = useRef();
    const moveLeft = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(moveRight.current, {
                x: -300,
                opacity: 0,
                duration: 8, 
                scrollTrigger: {
                    scrub: true,
                },
            })
            gsap.to(moveLeft.current, {
                x: 300,
                opacity: 0,
                duration: 8, 
                scrollTrigger: {
                    scrub: true,
                },
            })
        }, container);
        return () => ctx.revert();
    }, []);
    
    return ( <header ref={container} className="App-header flex flex-col items-center pt-60 md:pt-0 md:justify-center" id="home">
        <div className='px-12 sm:px-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-Blackout leading-none'>
            <p ref={moveRight}>Grow your</p>
            <p ref={moveLeft}>brand</p>
          </h1>
        </div>
      </header>
    )
}