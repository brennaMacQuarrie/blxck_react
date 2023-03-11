import * as emailjs from 'emailjs-com';
import { useRef } from "react"

export default function ContactForm() {
    const form = useRef()

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
    return (<div className='flex justify-center'>
        <form 
            ref={form} 
            onSubmit={sendEmail}
            className='flex flex-col gap-4 font-Russo text-xl w-fit'
        >
            <label htmlFor="name">My name is</label>
            <input type="text" name="name" required className='bg-black border-white border-2 rounded-md pl-2' />
            <label htmlFor="email">My email is</label>
            <input type="text" name="email" required className='bg-black border-white border-2 rounded-md pl-2' />
            <label htmlFor="companyName">My comapny name is</label>
            <input type="text" name="companyName" required className='bg-black border-white border-2 rounded-md pl-2' />
            <label htmlFor="subject">I want help with</label>
            <select placeholder="" name="subject" id="subject" required className='bg-black border-white border-2 rounded-md pl-2'>
                <option>Building my brand</option>
                <option>Improving my business strategy</option>
                <option>Building my site or online presence</option>
                <option>Setting up digital ads</option>
                <option>Understanding my target demographics</option>
                <option>Social media management</option>
                <option>Something else not listed</option>
            </select>
            <label htmlFor="budget">My project budget is</label>
            <select placeholder="" name="budget" id="budget" required className='bg-black border-white border-2 rounded-md pl-2'>
                <option>Less than $15k</option>
                <option>$15-50k</option>
                <option>Over $50k</option>
                <option>I don't know yet.</option>
            </select>
        </form>
    </div>)
}