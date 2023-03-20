import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import VerticalNavBar from "./VerticalNavBar";

export default function NavBar () { 
    gsap.registerPlugin(ScrollTrigger);

    const nav = useRef();
    const container = useRef();
    const animation = useRef(gsap.timeline());

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            animation.current = gsap.from(nav.current, {
                yPercent: -120,
                duration: 0.3,
                ease: "sine.out"
            })
        }, container);
        return () => ctx.revert();
    }, []);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? animation.current.play() : animation.current.reverse()
        }
      });

    return (
        <div ref={container} className='z-[777] fixed top-0 w-full px-5 md:px-16 py-2 md:py-4 flex justify-between items-center'>
            <a ref={nav} className='group block font-SpaceAge text-base sm:text-lg tracking-widest' href="#home">
                <span className='text-blx-gold'>Blxck</span>
                <span className='white-stroke group-hover:text-white'>maRketing</span>
            </a>
            <VerticalNavBar />
        </div>
    )
}

