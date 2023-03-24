export default function Button(props) {
    return (<button className='text-blx-gold rounded px-8 py-1 text-base sm:text-lg bg-black hover:bg-blx-gold hover:bg-opacity-70 hover:text-white transition-all duration-500'>
        {props.text}
    </button>)
}