import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";

export default function TextSection(props) {
    const container = useRef();
    const heading = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(heading.current, {
                x: 0,
                duration: 5,
                scrollTrigger: {
                    trigger: container.current,
                    scrub: true,
                },
            });
        }, container);
    
        return () => ctx.revert();
    });

    return (
        <div ref={container} className="min-h-[800px] sm:min-h-fit flex flex-col justify-center w-full bg-black text-white text-center py-8">
            {props.title && <h3 ref={heading} className={`${props.direction === 'left' ? 'translate-x-20 sm:translate-x-[-600px]' : 'translate-x-20 sm:translate-x-[600px]'} relative text-xl sm:text-2xl md:text-3xl leading-none font-SpaceAge white-stroke font-bold mt-6`}>
                {props.title} <span className='yellow-stroke'>/<span>/</span></span>
            </h3>}
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    )
}