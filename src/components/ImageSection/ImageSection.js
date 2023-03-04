export default function ImageSection(props) {
    return (
        <div 
            className='ImageSecton w-full h-screen' 
            style={{ 
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        />
        
      
    );
  }