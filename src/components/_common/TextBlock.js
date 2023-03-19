import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";


export default function TextBlock({ textBlockOne, textBlockTwo}) {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
 
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.block');
      blocks.forEach(block => {
        gsap.from(block, { 
          y: 80,
          duration: 1,
          scrollTrigger: {
            trigger: block,
            scrub: false
          }
        })
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
        <div ref={container} className='w-full h-fit flex flex-col gap-5 sm:text-lg lg:text-xl font-Russo uppercase px-8 md:px-20 lg:px-40 py-6 sm:py-10'>
          { textBlockOne && 
            <p className='block text-gray-400'>{ textBlockOne }</p> }
          { textBlockTwo && 
            <p className='block'>{ textBlockTwo }</p>}
        </div>
    )
}