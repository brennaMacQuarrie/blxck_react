import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

export default function TextSection(props) {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
    const heading = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(heading.current, {
                x: props.direction === 'right' ? -500 : 500,
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
        <div ref={container} className="h-fit w-full bg-black text-white h-fit py-16 text-center">
            {props.title && <h3 ref={heading} className='text-3xl font-SpaceAge white-stroke font-bold'>
                {props.title} <span className='yellow-stroke'>//</span>
            </h3>}
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    )
}