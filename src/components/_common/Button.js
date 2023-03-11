export default function Button(props) {
    return (<button className='border-[1px] border-blx-gold text-blx-gold rounded w-40 text-base sm:text-lg transition-all duration-75 hover:text-white hover:border-white hover:translate-y-px'>
        {props.text}
    </button>)
}