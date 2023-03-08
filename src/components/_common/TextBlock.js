export default function TextBlock({ textBlockOne, textBlockTwo}) {
    return (
        <div className='w-full text-xl font-Russo uppercase px-10'>
          { textBlockOne && 
            <span className='text-gray-400'>{ textBlockOne }</span> }
          <br /><br />
          { textBlockTwo && 
            <span>{ textBlockTwo }</span>}
        </div>
    )
}