import '../App.css';
import gsap from 'gsap';
import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'
import TextSection from './_common/TextSection';
import ContactModal from './ContactModal';
import { useEffect, useRef, useState } from 'react';
import CircleButton from './_common/CircleButton';
import WidgetButton from './_common/WidgetButton';

export default function ContactSection() {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef();
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

    return (
    <TextSection title={'Contact'} direction={'left'}>
        <div className='ContactSection h-screen min-h-fit flex flex-col gap-16 sm:gap-24 justify-center items-center'>
          <CircleButton triggerEvent={toggleModal} />
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 pb-40'>
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
      </TextSection>
    )
}