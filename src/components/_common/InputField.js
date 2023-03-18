import FormField from "./FormField";

export default function InputField({name, label}) {
    return (
        <FormField>
            <label htmlFor={name}>{label}</label>
            <input autoComplete="name" type="text" name={name} required className='flex-grow text-base sm:text-lg text-blx-gold bg-transparent border-b border-white/60 rounded-top px-1 focus:outline-none focus:bg-white/20 truncate' />
        </FormField>
    )
}