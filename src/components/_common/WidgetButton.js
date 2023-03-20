export default function WidgetButton({ href, alt, Icon, children }) {
    return (
        <div className='flex flex-col items-center gap-2'>
              <a 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  href={href}
                  className='relative transition-color duration-100 text-center flex gap-2 rounded-full text-[#ECF2F1] hover:text-white bg-white/20 hover:bg-white/40 transition-bg duration-300'
              >
                <img 
                      src={require('../../images/blxck_round_logo.png')}  
                      alt={alt}
                      className="h-16 w-16"
                  />
                  <Icon className='absolute top-5 right-5 h-6 w-6' />
              </a>
              { children }
        </div>
    )
}