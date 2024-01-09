import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

export default function VerticalNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const container = useRef();
    const menuContainer = useRef();
    const circle1 = useRef();
    const circle2 = useRef();
    const menu = useRef();
    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        const circles = [
            circle1.current,
            circle2.current,
          ];
        let ctx = gsap.context(() => {
            tl.current.to(menuContainer.current, { 
                height: 280,
                duration: 1
            })
            .to(menuContainer.current, {
                y: 16,
            }, '-=0.5')
            .to(menu.current, {
                paddingTop: 24,
                paddingBottom: 24,
                duration: 0.2
            }, '-=0.6')
            .to('a > *', {
                height: 24,
                width: 24,
                duration: 0.2,
                stagger: 0.06,
            }, '-=0.1')

            gsap.to(circles, { 
                rotation: 360,
                scale: 1.02,
                duration: 3,
                repeat: -1,
                ease: "linear",
            })
        }, container);
        
        return () => ctx.revert();
    }, []);

    const toggleMenu = () => {
        isOpen ? tl.current.reverse() : tl.current.play();
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div ref={container} className='fixed top-2 md:top-5 right-5 md:right-16 cursor-pointer rounded-full focus:outline-none focus-visible:bg-white/40'>
            <button className='block rounded-full' onClick={toggleMenu}>
                <img 
                    ref={circle1}
                    src="./blxck_ring_small.png"
                    alt='click to toggle a contact menu' 
                    className='h-10 w-10'
                />
            </button>
            <div ref={menuContainer} className={`z-50 absolute right-0 w-10 h-0`}>
                <div className="h-full w-full flex flex-col items-center gap-6">
                    <div ref={menu} className='h-full w-full bg-white/20 rounded-md flex flex-col justify-around gap-4 items-center overflow-hidden'>
                        <a 
                            aria-label='click to initiate a phone call' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="tel:+17807220646" 
                        >
                            <BsTelephone className={`h-0 text-white/70 hover:text-white focus:text-white`}/>
                        </a>
                        <a
                            aria-label='click to send us an email' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="mailto:blxckmarketing@gmail.com" 
                        >
                            <MdEmail className={`h-0 text-white/70 hover:text-white focus:text-white`}/>
                        </a>
                        <a
                            aria-label='click to open our location on google maps' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href='https://www.google.com/maps/place/BLXCK+marketing/@53.5529256,-113.5247396,15z/data=!4m2!3m1!1s0x0:0x1186dd76a63a1c34?sa=X&ved=2ahUKEwj0p4n54dT9AhUnIjQIHex-BcQQ_BJ6BAhgEAg'
                        >
                            <SiGooglemaps className={`h-0 text-white/70 hover:text-white focus:text-white`}/>
                        </a>
                    </div>
                    <img 
                        ref={circle2}
                        onClick={toggleMenu}
                        src="./blxck_ring_small.png"
                        alt='click to toggle a contact menu' 
                        className='h-7 w-7'
                    />
                </div>
            </div>
        </div>
    )
}