import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'
import { 
    WiMoonAltFull, 
    WiMoonAltWaxingCrescent1, 
    WiMoonAltWaxingCrescent4, 
    WiMoonAltWaxingGibbous1, 
    WiMoonAltWaxingGibbous4, 
    WiMoonAltNew } from 'react-icons/wi'
import { GrClose } from 'react-icons/gr'
import MoonAnimation from './_common/MoonAnimation';

const services = [
    {
        id: 'branding',
        Icon: WiMoonAltNew,
        title: 'Branding',
        content: 'From logo design to fonts & colors, we can help you find your company’s voice. Establishing a brand and sticking to it is extremely important when it comes to capturing and holding the attention of potential clients.'
    },
    {
        id: 'strategy',
        Icon: WiMoonAltWaxingCrescent1,
        title: 'Strategy',
        content: 'Figuring out your goals. Short term and long term. Using data generated by your ads and/or website analytics, we figure out what’s working and use it to plan your best course of action, always keeping inline with your branding.'
    },
    {
        id: 'development',
        Icon: WiMoonAltWaxingCrescent4,
        title: 'Development',
        content: 'Once we have your brand carved out & a strategy or plan of action, it’s time to build your dream. We offer website creation, graphic design, photography, and videography, and can support you in sourcing all of your digital assets.'
    },
    {
        id: 'advertising',
        Icon: WiMoonAltWaxingGibbous1,
        title: 'Advertising',
        content: 'Using mediums including Google Ads, YouTube, Facebook, and Instagram, we build customized targeting; growing your organic reach and developing vast re-marketing audiences.'
    },
    {
        id: 'analytics',
        Icon: WiMoonAltWaxingGibbous4,
        title: 'Analytics',
        content: 'We send out detailed monthly reports summarizing where and how all advertising dollars are spent. This data will also be analyzed and used to create new strategies for the future.'
    },
    {
        id: 'socials',
        Icon: WiMoonAltFull,
        title: 'Socials',
        content: 'Managing social media can be a time consuming task. Our team can help take that off of your hands, freeing up your psychological CPU to focus on managing your business.'
    },
]


export default function Services() {
    gsap.registerPlugin(ScrollTrigger);
    const [activeItem, setActiveItem] = useState({});

    const service = useRef();
    const text = useRef();

    const tl = gsap.timeline();
   

    const handleOpen = (id) => {
        setActiveItem(services.find(item => item.id === id));
        tl.to(service.current, {
            zIndex: 2,
        })
        .to(service.current, {
            height: '100%',
            autoAlpha: 1,
            duration: 0.6,
        })
        .to(text.current, {
            autoAlpha: 1,
            height: 200,
            duration: 0.6
        });
    }

    const handleClose = () => {
        setActiveItem({})
        tl.to(service.current, {
            height: 0,
            autoAlpha: 0,
            duration: 0.5,
        })
        .to(service.current, {
            zIndex: -1,
        }, '-=0.3')
    }


    return (
         <div className='relative w-full overflow-hidden flex justify-center flex-wrap h-fit p-16 lg:p-4'>
            <div ref={service} onClick={() => handleClose(activeItem.id)} className='z-[-1] opacity-0 invisible absolute top-0 left-0 w-full flex flex-col py-10 items-center text-xl font-Russo bg-black'>
                <div ref={text} className='opacity-0 invisible h-0'>
                    <button onClick={() => handleOpen(activeItem.id)}>
                        <MoonAnimation />
                        {/* <GrClose className='rounded-full bg-white/40 hover:bg-white/100 p-3 transition-bg duration-500 h-6 w-6' /> */}
                    </button>
                    <h3 className='text-3xl text-blx-blue font-SpaceAge'>
                        {activeItem.title}
                    </h3>
                    <p className='text-lg lg:text-xl px-16'>
                        {activeItem.content}
                    </p>
                </div>
            </div>
            { services.map(service => {
                return (
                    <ServiceBlock
                        key={service.id}
                        id={service.id} 
                        Icon={service.Icon}
                        title={service.title}
                        content={service.content} 
                        handleOpen={handleOpen}
                    />)
                })
            }
        </div>
    )
}

function ServiceBlock({ id, title, Icon, handleOpen }) {
    const handlehandleOpen = (id) => {
        handleOpen(id)
    }

    return (
        <React.Fragment>
            <button onClick={() => handlehandleOpen(id)} className='w-[350px] lg:w-[400px] h-[200px] lg:h-[200px] flex flex-col justify-center items-center gap-4 border-white/40 border-2 bg-black transition-bg duration-300 hover:bg-white/40 hover:border-transparent'>
                <Icon className='min-h-[50px] min-w-[50px]' />
                <h3 className="w-full text-base md:text-xl font-SpaceAge transition-scale duration-300 group-hover:scale-105 text-blx-blue group-hover:text-blx-gold">
                    {title}
                </h3>
            </button>
        </React.Fragment>
    )
}