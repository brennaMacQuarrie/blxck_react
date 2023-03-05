import './App.css';
import ImageSection from './components/_common/ImageSection';
import NavBar from './components/NavBar'
import TextSection from './components/_common/TextSection';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header flex flex-col justify-center items-center" id="home">
        <div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl md:text-5xl font-Blackout leading-none'>
            Grow your <br />brand
          </h1>
          <h2 className="text-xl md:text-2xl font-Russo tracking-wider">Digital Strategy // Marketing</h2>
        </div>
      </header>
      <TextSection title={'About us'} direction={'left'}>
        <span className='w-full text-gray-400'>
          We are a canadian based advertising agency, but our clients and reach stretch around the globe.
          We believe that any business can succeed.
        </span>
        <br /><br />
        <span className='w-full'>
          Our mission is to heighten the potency of your marketing efforts by giving you the most effective ad stragety possible.</span>
      </TextSection>

      <ImageSection image={'/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'} />

      <TextSection title={'What we do'} direction={'left'}>
        <span className='w-full text-gray-400'>We support you by expanding or developing your business's organic growth and brand recognition.</span>
        <br /><br />
        <span className='w-full'>We do this by supplementing your natural appeal with our expertise in ad buys.</span>
      </TextSection>

      <ImageSection image={'/epic-earth-rotate-sunlight-glow-starry-galaxy-2021-08-29-03-57-26-utc.jpg'} />

      <TextSection title={'Our services'} direction={'left'}>
        <Accordion />
      </TextSection>

      <ImageSection image={'/mathew-schwartz-7YiZKj9A3DM-unsplash.jpg'} />

      <TextSection title={'Contact'} direction={'left'}>
        form here
      </TextSection>
      
      <TextSection 
        direction={'left'}

      >
      </TextSection>
    </div>
  );
}

export default App;
