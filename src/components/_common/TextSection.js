export default function TextSection(props) {
    return (
        <div className="h-fit w-full bg-black text-white h-fit py-16 text-center">
            {props.title && <h3 className='text-3xl font-SpaceAge white-stroke font-bold'>
                {props.title} <span className='yellow-stroke'>//</span>
            </h3>}
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    )
}