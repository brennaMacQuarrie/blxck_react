export default function ImageSection(props) {
    return (
        <div 
            className='ImageSecton relative w-full h-screen min-h-fit bg-local sm:bg-fixed bg-cover' 
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