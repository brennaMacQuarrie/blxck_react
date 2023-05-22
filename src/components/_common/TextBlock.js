import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";


export default function TextBlock({ textBlockOne, textBlockTwo}) {
  const container = useRef();
 
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.block');
      blocks.forEach(block => {
        gsap.from(block, { 
          y: 60,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: block,
            scrub: 1,
            staggered: true,
            end: "top middle"
          }
        })
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
        <div ref={container} className='w-full h-fill flex flex-col gap-5 text-[18px] sm:text-lg lg:text-xl font-medium px-8 md:px-20 lg:px-40 py-6 sm:py-10'>
          { textBlockOne && 
            <p className='block text-gray-400'>{ textBlockOne }</p> }
          { textBlockTwo && 
            <p className='block'>{ textBlockTwo }</p> }
        </div>
    )
}