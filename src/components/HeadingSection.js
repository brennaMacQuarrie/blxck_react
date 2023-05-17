import { gsap } from "gsap"
import { Suspense, useLayoutEffect, useRef } from "react";
import Loader from "./_common/Loader";

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
    
    return (     <Suspense fallback={<Loader />}>
    <header ref={container} className="App-header flex flex-col items-center pt-60 md:pt-0 md:justify-center" id="home">
        <div className='px-12 sm:px-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-Blackout leading-none'>
            <p ref={heading} className={`translate-y-20 sm:translate-y-[800px] opacity-0`}>Grow your<br/>
            brand</p>
          </h1>
        </div>
      </header>
      </Suspense>
    )
}