import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

export default function VerticalNavBar() {
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen)
        gsap.to(menu.current, { 
            height: isOpen ? 0 : 280,
        });
    };

    return (
        <div class='fixed top-5 right-16 cursor-pointer rounded-full focus:outline-none focus-visible:bg-white/40'>
            <button ref={container} className='block' onClick={toggleMenu}>
                <img 
                    ref={circle}
                    src={require('../images/blxck_round_logo.png')}  
                    alt='neon ring logo' 
                    className='h-10 w-10'
                />
            </button>
            <div ref={menu} className={`${isOpen ? 'top-16 transition-top duration-75' : 'top-8'} z-50 absolute right-0 w-10 h-0`}>
                <div className="h-full w-full flex flex-col items-center gap-6">
                    <div className='h-full w-full bg-white/10 rounded-md flex flex-col gap-10 justify-center items-center'>
                        <a 
                            aria-label='click to initiate a phone call' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="tel:780-722-0646" 
                        >
                            <BsTelephone className={`${isOpen ? 'h-6 w-6' : 'h-0'} transition-height duration-500`}/>
                        </a>
                        <a
                            aria-label='click to send us an email' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="mailto:blxckmarketing@gmail.com" 
                        >
                            <MdEmail className={`${isOpen ? 'h-6 w-6' : 'h-0'} transition-height duration-500`}/>
                        </a>
                        <a
                            aria-label='click to open our location on google maps' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href='https://www.google.com/maps/place/BLXCK+marketing/@53.5529256,-113.5247396,15z/data=!4m2!3m1!1s0x0:0x1186dd76a63a1c34?sa=X&ved=2ahUKEwj0p4n54dT9AhUnIjQIHex-BcQQ_BJ6BAhgEAg'
                        >
                            <SiGooglemaps className={`${isOpen ? 'h-6 w-6' : 'h-0'} transition-height duration-500`}/>
                        </a>
                    </div>
                    <img 
                        onClick={toggleMenu}
                        ref={circle}
                        src={require('../images/blxck_round_logo.png')}  
                        alt='neon ring logo' 
                        className='h-8 w-8'
                    />
                </div>
            </div>
        </div>
    )
}