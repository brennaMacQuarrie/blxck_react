import React, { useState } from 'react'
import { 
    WiMoonAltFull, 
    WiMoonAltWaxingCrescent1, 
    WiMoonAltWaxingCrescent4, 
    WiMoonAltWaxingGibbous1, 
    WiMoonAltWaxingGibbous4, 
    WiMoonAltNew } from 'react-icons/wi'

export default function Services() {
    const [activeItem, setActiveItem] = useState('');

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

    const toggleActive = (id) => {
        if (id !== activeItem) {
            setActiveItem(id)
        } else {
            setActiveItem('')
        }    
    }


    return (
         <div className='relative w-full overflow-hidden flex justify-center flex-wrap h-fit sm:h-[60vh] p-4'>
            { services.map((service, index) => {
                return (
                    <ServiceBlock
                        key={service.id}
                        id={service.id} 
                        Icon={service.Icon}
                        title={service.title}
                        content={service.content} 
                        isActive={service.id === activeItem}
                        isHidden={activeItem && service.id !== activeItem}
                        toggleActive={toggleActive}
                    />)
                })
            }
        </div>
    )
}

function ServiceBlock({ id, title, content, Icon, isActive, toggleActive }) {
    return (
        <React.Fragment>
            <button onClick={() => toggleActive(id)} className='w-[400px] h-[200px] flex flex-col justify-center items-center gap-4 border-white/40 border-2 bg-black transition-bg duration-300 hover:bg-white/40 hover:border-transparent'>
                <Icon className='min-h-[50px] min-w-[50px]' />
                <h3 className="w-full text-base md:text-xl font-SpaceAge transition-scale duration-300 group-hover:scale-105 text-blx-blue group-hover:text-blx-gold">
                    {title}
                </h3>
            </button>
            <button onClick={() => toggleActive(id)} className={`${isActive ? 'h-full z-20' : 'hidden h-0 z-0'} absolute top-0 left-0 w-full flex flex-col justify-center items-center transition-height duration-700 font-thin text-xl font-Russo bg-black`}>
                <Icon className={`${isActive ? 'min-h-[50px] min-w-[50px]' : 'w-0'} transition-width duration-300`} />
                <h3 className={`${isActive ? 'opacity-100' : 'opacity-0'} text-3xl text-blx-blue font-SpaceAge transition-opacity duration-300 delay-300`}>
                    {title}
                </h3>
                <span className={`${isActive ? 'opacity-100' : 'opacity-0'} px-16 transition-opacity duration-300 delay-300`}>
                    {content}
                </span>
            </button>
        </React.Fragment>
    )
}