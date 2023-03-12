import './App.css';
import ImageSection from './components/_common/ImageSection';
import NavBar from './components/NavBar'
import TextSection from './components/_common/TextSection';
import Services from './components/Services';
import TextBlock from './components/_common/TextBlock';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import HeadingSection from './components/HeadingSection';

function App() {
  return (
    <div className="App overflow-hidden">
      <NavBar></NavBar>
      <HeadingSection />

      <TextSection title={'About us'} direction={'right'}>
        <TextBlock 
          textBlockOne={"We are a canadian based advertising agency, but our clients and reach stretch around the globe. We believe that any business can succeed."}
          textBlockTwo={"Our mission is to heighten the potency of your marketing efforts by giving you the most effective ad stragety possible."}
        />
      </TextSection>

      <ImageSection image={'/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'} />

      <TextSection title={'What we do'} direction={'left'}>
        <TextBlock 
          textBlockOne={"We support you by expanding or developing your business's organic growth and brand recognition."}
          textBlockTwo={"We do this by supplementing your natural appeal with our expertise in ad buys."}
        />
      </TextSection>

      <ImageSection image={'/epic-earth-rotate-sunlight-glow-starry-galaxy-2021-08-29-03-57-26-utc.jpg'} />

      <TextSection title={'Our services'} direction={'right'}>
        <Services />
      </TextSection>

      {/* <ImageSection image={'/mathew-schwartz-7YiZKj9A3DM-unsplash.jpg'} /> */}
      <div className='bg-black h-screen w-screen relative'>
        <img 
          src={require('./images/neon.png')}  
          alt='neon spinning light' 
          className='absolute top-0 left-0 right-0 margin-auto translate-x-[50%] h-[506px]'
        />
      </div>

      <TextSection title={'Contact'} direction={'left'}>
        <ContactForm />
      </TextSection>
      
      <ContactSection />
    </div>
  );
}

export default App;
