export default function ImageSection(props) {
    return (
        <div 
            className='ImageSecton w-full h-screen min-h-fit bg-local sm:bg-fixed bg-cover' 
            style={{ 
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
        />
    );
  }