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
        setIsOpen(isOpen => !isOpen);

        const tl = gsap.timeline();
        tl.to(container.current, { 
            height: isOpen ? 0 : 280,
            duration: 1
        })
        .to(container.current, {
            y: isOpen ? 8 : 18,
        }, '-=0.5')
        .to(menu.current, {
            paddingTop: isOpen ? 0 : 24,
            paddingBottom: isOpen ? 0 : 24,
            duration: 0.2
        }, '-=0.6')
        .to('a > *', {
            height: isOpen ? 0 : 24,
            width: isOpen ? 0 : 24,
            duration: 0.2,
            stagger: 0.06,
        }, `${isOpen ? '-=1' : '-=0.1'}`)
    };

    return (
        <div className='fixed top-5 right-16 cursor-pointer rounded-full focus:outline-none focus-visible:bg-white/40'>
            <button className='block rounded-full' onClick={toggleMenu}>
                <img 
                    ref={circle}
                    src={require('../images/blxck_round_logo.png')}  
                    alt='click to toggle a contact menu' 
                    className='h-10 w-10'
                />
            </button>
            <div ref={container} className={`z-50 absolute right-0 w-10 h-0`}>
                <div className="h-full w-full flex flex-col items-center gap-6">
                    <div ref={menu} className='h-full w-full bg-white/10 rounded-md flex flex-col justify-around gap-4 items-center overflow-hidden'>
                        <a 
                            aria-label='click to initiate a phone call' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="tel:780-722-0646" 
                        >
                            <BsTelephone className={`h-0 text-white/60 hover:text-white focus:text-white`}/>
                        </a>
                        <a
                            aria-label='click to send us an email' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="mailto:blxckmarketing@gmail.com" 
                        >
                            <MdEmail className={`h-0 text-white/60 hover:text-white focus:text-white`}/>
                        </a>
                        <a
                            aria-label='click to open our location on google maps' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href='https://www.google.com/maps/place/BLXCK+marketing/@53.5529256,-113.5247396,15z/data=!4m2!3m1!1s0x0:0x1186dd76a63a1c34?sa=X&ved=2ahUKEwj0p4n54dT9AhUnIjQIHex-BcQQ_BJ6BAhgEAg'
                        >
                            <SiGooglemaps className={`h-0 text-white/60 hover:text-white focus:text-white`}/>
                        </a>
                    </div>
                    <img 
                        onClick={toggleMenu}
                        ref={circle}
                        src={require('../images/blxck_round_logo.png')}  
                        alt='click to toggle a contact menu' 
                        className='h-8 w-8'
                    />
                </div>
            </div>
        </div>
    )
}