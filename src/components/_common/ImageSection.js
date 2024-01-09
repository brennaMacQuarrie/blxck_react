export default function ImageSection({ desktopURL, mobileURL }) {
    return (
        <>
            <div 
                className='ImageSecton relative w-full min-h-[1200px] bg-cover bg-local sm:bg-fixed hidden lg:block' 
                style={{ 
                    backgroundImage: `url(${desktopURL})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
                <div className="absolute z-10 bg-gradient-to-b from-black via-transparent via-transparent to-black h-full w-full" />
            </div>
            <div 
                className='ImageSecton relative w-full min-h-screen bg-cover bg-local sm:bg-fixed block lg:hidden' 
                style={{ 
                    backgroundImage: `url(${mobileURL})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
                <div className="absolute z-10 bg-gradient-to-b from-black via-transparent via-transparent to-black h-full w-full" />
            </div>
        </>
    );
  }