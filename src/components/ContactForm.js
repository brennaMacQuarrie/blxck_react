import * as emailjs from 'emailjs-com';
import { useRef } from "react"
import Button from './_common/Button';

export default function ContactForm() {
    const form = useRef()

    const supportOptions = [
        { id: "branding", text: "Building my brand" },
        { id: "strategy", text: "Improving my business strategy" },
        { id: "site", text: "Building my site or online presence" },
        { id: "ads", text: "Setting up digital ads" },
        { id: "demographics", text: "Understanding my target demographics" },
        { id: "social-media", text: "Social media management" },
        { id: "other", text: "Something else not listed" },
    ]

    const budgetOptions = [
        { id:"15k", text: "Less than $15k" },
        { id:"15-50k", text: "$15-50k" },
        { id:"50k", text: "Over $50k" },
        { id:"unknown", text: "I don't know yet." },
    ]

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )

        e.target.reset()
    }
    return (<div className='flex justify-center my-10'>
        <form 
            ref={form} 
            onSubmit={sendEmail}
            className='flex flex-col items-center gap-5 font-Russo text-lg sm:text-xl w-full'
        >
            <div className='flex flex-col md:flex-row gap-3 md:gap-5 w-1/2'>
                <label htmlFor="name">My name is</label>
                <input type="text" name="name" required className='flex-grow text-base sm:text-lg text-blx-gold bg-black border-b border-white pl-1 focus:outline-none focus:bg-white/20' />
            </div>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5 w-1/2'>
                <label htmlFor="email">My email is</label>
                <input type="text" name="email" required className='flex-grow text-base sm:text-lg text-blx-gold bg-black border-b border-white pl-1 focus:outline-none focus:bg-white/20' />
            </div>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5 w-1/2'>
                <label htmlFor="companyName">My comapny name is</label>
                <input type="text" name="companyName" required className='flex-grow text-base sm:text-lg text-blx-gold bg-black border-b border-white pl-1 focus:outline-none focus:bg-white/20' />
            </div>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                <label htmlFor="subject">I want help with</label>
                <select name="subject" id="subject" required className='text-base sm:text-lg text-blx-gold bg-black border-b border-white pl-1 focus:outline-none focus:bg-white/20'>
                    <option value="" disabled selected>Select your support option</option>
                    { supportOptions.map(option => <option key={option.id} value={option.id}>{option.text}</option>) }
                </select>
            </div>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                <label htmlFor="budget">My project budget is</label>
                <select placeholder="Select your budget" name="budget" id="budget" required className='text-base sm:text-lg text-blx-gold bg-black border-b border-white pl-1 focus:outline-none focus:bg-white/20'>
                    <option value="" disabled selected>Select your support option</option>
                    { budgetOptions.map(option => <option className='text-blx-gold' key={option.id} value={option.id}>{option.text}</option>) }
                </select>
            </div>
            
            <Button type="submit" text={'Submit'} />
        </form>
    </div>)
}