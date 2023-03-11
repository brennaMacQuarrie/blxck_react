export default function FormField(props) {
    return (
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 min-w-1/2 flex-grow'>
            {props.children}
        </div>
    )
}