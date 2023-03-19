import '../App.css';
import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import TextSection from './_common/TextSection';
import ContactModal from './ContactModal';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CircleButton from './_common/CircleButton';

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
        <div className='ContactSection flex flex-col gap-8 pt-16 items-center'>
          <CircleButton triggerEvent={toggleModal} />
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center gap-2'>
              <a 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  href="mailto:blxckmarketing@gmail.com" 
                  className='relative transition-color duration-100 text-center flex gap-2 rounded-full text-[#ECF2F1] hover:text-white bg-white/10'
              >
                <img 
                      src={require('../images/blxck_round_logo.png')}  
                      alt='click to send us an email' 
                      className="h-16 w-16"
                  />
                  <MdEmail className='absolute top-5 right-5 h-6 w-6' />
              </a>
              blxckmarketing@gmail.com
            </div>
            <div className='flex flex-col items-center gap-2'>
              <a 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  href="tel:780-722-0646" 
                  className='relative transition-color duration-100 text-center flex gap-2 rounded-full text-[#ECF2F1] hover:text-white bg-white/10'
              >
                <img 
                    src={require('../images/blxck_round_logo.png')}  
                    alt='click to initiate a phone call' 
                    className="h-16 w-16"
                />
                <BsTelephone className='absolute top-5 right-5 h-6 w-6' />
              </a>
              (780) 722-0646
            </div>
            <a 
                aria-label='click to open our location on google maps' 
                target='_blank' 
                rel='noopener noreferrer' 
                href='https://www.google.com/maps/place/BLXCK+marketing/@53.5529256,-113.5247396,15z/data=!4m2!3m1!1s0x0:0x1186dd76a63a1c34?sa=X&ved=2ahUKEwj0p4n54dT9AhUnIjQIHex-BcQQ_BJ6BAhgEAg'
                className='transition-color duration-100 hover:text-blx-blue'
            >
                <p>11715H 108 ave</p>
                <p>Edmonton, AB Canada</p>
            </a>
          </div>
        </div>
        <ContactModal ref={container} close={toggleModal} />
      </TextSection>
    )
}