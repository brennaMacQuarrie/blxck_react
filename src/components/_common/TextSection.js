import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

export default function TextSection(props) {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
    const heading = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(heading.current, {
                x: 0,
                duration: 6, 
                scrollTrigger: {
                    trigger: container.current,
                    toggleActions: "restart pause resume reset",
                    scrub: true,
                },
            });
        }, container);
    
        return () => ctx.revert();
    });

    return (
        <div ref={container} className="min-h-[70vh] h-fit flex flex-col justify-center w-full bg-black text-white h-fit text-center">
            {props.title && <h3 ref={heading} className={`${props.direction === 'left' ? 'translate-x-[100px] sm:translate-x-[-600px]' : 'translate-x-[100px] sm:translate-x-[600px]'} relative text-2xl md:text-3xl font-SpaceAge white-stroke font-bold`}>
                {props.title} <span className='yellow-stroke'>//</span>
            </h3>}
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    )
}