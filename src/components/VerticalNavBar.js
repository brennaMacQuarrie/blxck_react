import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

export default function VerticalNavBar() {
    const [isOpen, setIsOpen] = useState(true);

    const container = useRef();
    const circle = useRef();
    const menu = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.to(".box", { 
            rotation: "+=360", 
            duration: 3, 
            repeat: -1,
            ease: 'none'
          });
          
          gsap.to(circle.current, { 
            rotation: "+=360", 
            duration: 3, 
            repeat: -1,
            ease: 'none'
          });
        }, container);
        
        return () => ctx.revert();
    });

    const openMenu = () => {
        setIsOpen(isOpen => !isOpen)
        gsap.to(menu.current, { 
            height: isOpen ? 240 : 0,
        });
    };

    return (
        <button class='fixed top-4 right-4 cursor-pointer rounded-full focus:outline-none focus-visible:bg-white/40' onClick={openMenu}>
            <div ref={container} className='block'>
                <img 
                    ref={circle}
                    src={require('../images/neon.png')}  
                    alt='neon spinning light' 
                    className='h-12 w-12 margin-auto'
                />
            </div>
            <div ref={menu} className='z-50 absolute top-16 right-0 w-12 h-0 bg-white/20 flex flex-col justify-center items-center rounded-md'>
                <div className='h-full flex flex-col justify-between py-10'>
                    <BsTelephone 
                        aria-label='click to initiate a phone call' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href="tel:780-722-0646" 
                        className='h-6 w-6' 
                    />
                    <MdEmail 
                        aria-label='click to send us an email' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href="mailto:blxckmarketing@gmail.com" 
                        className='h-6 w-6' 
                    />
                    <SiGooglemaps 
                        aria-label='click to open our location on google maps' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href='https://www.google.com/maps/place/BLXCK+marketing/@53.5529256,-113.5247396,15z/data=!4m2!3m1!1s0x0:0x1186dd76a63a1c34?sa=X&ved=2ahUKEwj0p4n54dT9AhUnIjQIHex-BcQQ_BJ6BAhgEAg'
                        className='h-6 w-6' 
                    />
                </div>
            </div>
        </button>
    )
}