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
        console.log(block)
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
        <div ref={container} className='w-full text-xl font-Russo uppercase px-20 py-10'>
          { textBlockOne && 
            <p className='block text-gray-400'>{ textBlockOne }</p> }
          { textBlockTwo && 
            <p className='block'>{ textBlockTwo }</p>}
        </div>
    )
}