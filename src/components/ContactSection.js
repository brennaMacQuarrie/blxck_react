import '../App.css';
import gsap from 'gsap';
import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'
import ContactModal from './ContactModal';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import CircleButton from './_common/CircleButton';
import WidgetButton from './_common/WidgetButton';
import AsyncImage from './_common/AsyncImage';

export default function ContactSection() {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef();
    const heading = useRef();

    const tl = useRef(gsap.timeline({ paused: true }));


    useEffect(() => {
        let ctx = gsap.context(() => {
            tl.current.to(container.current, { 
                autoAlpha: 1,
                zIndex: 999,
                opacity: 1,
                duration: 0.8
            })
            .to('.Form', {
              scale: 1,
              transformOrigin: "50% 20%",
              duration: 0.7
            }, '-=0.6')
           
        }, container);
        
        return () => ctx.revert();
    }, []);
    
    const toggleModal = () => {
        setIsOpen(isOpen => !isOpen)
        isOpen ? tl.current.reverse() : tl.current.play()
    }
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
    <div>
        <div className='ContactSection relative h-screen min-h-[600px] flex flex-col gap-16 sm:gap-24 justify-center items-center pb-6 bg-black z-0'>
          <h3 ref={heading} className='z-[999] translate-x-20 sm:translate-x-[-600px] relative text-xl sm:text-2xl md:text-3xl leading-none font-SpaceAge white-stroke font-bold mt-6'>
                Contact <span className='yellow-stroke'>/<span>/</span></span>
          </h3>
          <AsyncImage src="./SM_thing3.jpg" alt="A satellite in space." className="absolute bottom-0 left-[-25%] w-[150%] h-auto block lg:hidden" />
          <AsyncImage src="./LG_thing3.jpg" alt="A satellite in space." className="absolute bottom-0 left-[-3px] w-[102%] h-fit hidden lg:block" />

          <CircleButton triggerEvent={toggleModal} />
          <div className='z-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 pb-40'>
            <WidgetButton 
              href="mailto:blxckmarketing@gmail.com"
              alt="click to send us an email"
              Icon={MdEmail}
            >
              blxckmarketing@gmail.com
            </WidgetButton>
            <WidgetButton 
              href="tel:+17807220646"
              alt="click to initiate a phone call"
              Icon={BsTelephone}
            >
              +1 (780) 722-0646
            </WidgetButton>
            <WidgetButton 
              href='https://www.google.com/maps/place/BLXCK+marketing/@53.5529256,-113.5247396,15z/data=!4m2!3m1!1s0x0:0x1186dd76a63a1c34?sa=X&ved=2ahUKEwj0p4n54dT9AhUnIjQIHex-BcQQ_BJ6BAhgEAg'
              alt='click to view us on Google Maps' 
              Icon={SiGooglemaps}
            >
              11715J 108 Ave NW <br />
              Edmonton, AB T5H 1B8<br /> 
              Located in The Deth Lab Studios
            </WidgetButton>
          </div>
        </div>
        <ContactModal ref={container} close={toggleModal} />
      </div>
    )
}