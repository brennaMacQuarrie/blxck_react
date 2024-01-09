import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react";
import AsyncImage from "./_common/AsyncImage";

export default function HeadingSection() {
    const container = useRef();
    const heading = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(heading.current, {
                y: 0,
                opacity: 1,
                duration: 2, 
                scrollTrigger: {
                    scrub: true,
                },
            })
        }, container);
        return () => ctx.revert();
    }, []);
    
    return (     
      <header ref={container} className="App-header relative flex flex-col items-center pt-60 md:pt-0 md:justify-center" id="home">
        <AsyncImage src="./SM_earth4.jpg" alt="Black marketing image header of the earth from space." className="absolute top-0 left-[-50%] md:left-0 w-auto h-full block lg:hidden" />
        <AsyncImage src="./LG_earth4.png" alt="Black marketing image header of the earth from space." className="absolute top-0 left-0 w-full h-full hidden lg:block" />

        <div className='px-12 sm:px-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-Blackout leading-none'>
            <p ref={heading} className={`translate-y-4 sm:translate-y-[800px] opacity-0`}>Grow your<br/>
            brand</p>
          </h1>
        </div>
      </header>
    )
}