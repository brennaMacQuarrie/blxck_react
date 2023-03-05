export default function TextSection(props) {
    return (
        <div className={`h-fit w-full ${props.title && 'bg-black'} text-white h-fit py-16`}>
            {props.title && <h3 className='text-3xl font-SpaceAge white-stroke font-bold'>
                {props.title} <span className='yellow-stroke'>//</span>
            </h3>}
            <div className='w-full px-10 text-xl font-Russo uppercase text-center'>
                {props.children}
            </div>
        </div>
    )
}