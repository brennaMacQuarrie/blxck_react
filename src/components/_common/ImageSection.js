export default function ImageSection(props) {
    return (
        <div 
            className='ImageSecton w-full h-screen bg-scroll sm:bg-fixed' 
            style={{ 
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        />
    );
  }