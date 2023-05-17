export default function ImageSection(props) {
    return (
        <div 
            className='ImageSecton relative w-full min-h-screen bg-cover bg-local sm:bg-fixed' 
            style={{ 
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
        >
            <div className="absolute z-50 bg-gradient-to-b from-transparent via-transparent via-transparent to-black h-full w-full" />
        </div>
    );
  }