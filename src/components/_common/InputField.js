import FormField from "./FormField";

export default function InputField({name, label}) {
    return (
        <FormField>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} required className='flex-grow text-base sm:text-lg text-blx-gold bg-black border-b border-white px-1 focus:outline-none focus:bg-white/20' />
        </FormField>
    )
}