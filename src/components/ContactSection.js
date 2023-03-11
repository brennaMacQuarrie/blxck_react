import '../App.css';
import { BsTelephone } from 'react-icons/bs'
import { MdEmail} from 'react-icons/md'

export default function ContactSection() {
    return (
        <div className='ContactSection flex justify-center items-center'>
            <div className='text-center flex flex-col items-center'>
                <h4 className='font-Russo text-blx-gold text-xl tracking-widest'>Contact Address</h4>
                <a 
                    aria-label='click to send us an email' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    href="mailto:blxckmarketing@gmail.com" 
                    className='transition-color duration-100 text-center flex gap-2 hover:text-blx-blue'
                >
                    <MdEmail className='h-5 w-5' />blxckmarketing@gmail.com
                </a>
                <a 
                    aria-label='click to initiate a phone call' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    href="tel:780-722-0646" 
                    className='transition-color duration-100 text-center flex gap-2 hover:text-blx-blue'
                >
                    <BsTelephone className='h-5 w-5' />(780) 722-0646
                </a>
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
    )
}