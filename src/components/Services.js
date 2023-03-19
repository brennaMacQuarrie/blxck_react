import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useState } from 'react';
import {
    WiMoonAltFull, WiMoonAltNew, WiMoonAltWaxingCrescent1,
    WiMoonAltWaxingCrescent4,
    WiMoonAltWaxingGibbous1,
    WiMoonAltWaxingGibbous4
} from 'react-icons/wi';
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
            autoAlpha: 1,
        })
        .to(service.current, {
            scale: 1,
            transformOrigin: '50% 20%',
            duration: 0.8,
        })
        .to(text.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.8
        });
    }

    const handleClose = () => {
        setActiveItem({})
        tl.to(service.current, {
            scale: 0,
            autoAlpha: 0,
            duration: 0.5,
        })
        .to(service.current, {
            zIndex: -1,
        })
    }


    return (
         <div className='relative mb-10 w-full min-h-[45vh] overflow-hidden grid grid-cols-2 lg:grid-cols-3 p-0 sm:p-4'>
            <button ref={service} onClick={() => handleClose(activeItem.id)} className='z-[-1] opacity-0 invisible absolute top-0 left-0 w-full h-full scale-0 flex flex-col items-center pt-10 text-xl font-Russo bg-black'>
                <div ref={text} className='opacity-0 invisible h-0'>
                    <MoonAnimation size="80px" isActive={true} />
                    <h3 className='text-xl md:text-3xl mb-4 text-blx-blue font-SpaceAge'>
                        {activeItem.title}
                    </h3>
                    <p className='text-base sm:text-lg lg:text-xl px-16'>
                        {activeItem.content}
                    </p>
                </div>
            </button>
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
            <button onClick={() => handlehandleOpen(id)} className='group h-full py-8 md:py-10 flex flex-col justify-center items-center gap-2 border-white/30 border-2 bg-black transition-bg duration-300 hover:bg-white/30 hover:border-transparent'>
                <Icon className='min-h-[50px] min-w-[50px]' />
                <h3 className="w-full text-base sm:text-lg md:text-xl font-SpaceAge transition-scale duration-300 group-hover:scale-105 text-blx-blue sm:blue-stroke group-hover:text-blx-blue">
                    {title}
                </h3>
            </button>
        </React.Fragment>
    )
}