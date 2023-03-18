import './App.css';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import TextSection from './components/_common/TextSection';
import Services from './components/Services';
import TextBlock from './components/_common/TextBlock';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import HeadingSection from './components/HeadingSection';
import RocketShip from './components/RocketShip';
import Loader from './components/_common/Loader';
// import ImageSection from './components/_common/ImageSection';
const ImageSection = lazy(() => import('./components/_common/ImageSection'));

function App() {
  return (
    <div className="App overflow-hidden">
      <NavBar />
      <HeadingSection />

      <TextSection title={'About us'} direction={'right'}>
        <TextBlock 
          textBlockOne={"We are a canadian based advertising agency, but our clients and reach stretch around the globe. We believe that any business can succeed."}
          textBlockTwo={"Our mission is to heighten the potency of your marketing efforts by giving you the most effective ad stragety possible."}
        />
      </TextSection>

      <Suspense fallback={<Loader />}>
        <ImageSection image={'/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'} />
      </Suspense>

      <TextSection title={'What we do'} direction={'left'}>
        <TextBlock 
          textBlockOne={"We support you by expanding or developing your business's organic growth and brand recognition."}
          textBlockTwo={"We do this by supplementing your natural appeal with our expertise in ad buys."}
        />
      </TextSection>

      <Suspense fallback={<Loader />}>
        <ImageSection image={'/epic-earth-rotate-sunlight-glow-starry-galaxy-2021-08-29-03-57-26-utc.jpg'} />
      </Suspense>

      <TextSection title={'Our services'} direction={'right'}>
        <Services />
      </TextSection>

      <Suspense fallback={<Loader />}>
        <ImageSection image={'/solar-eclipse-by-a-lunar-event-with-ring-of-fire-2021-08-29-03-57-26-utc.jpg'} />
      </Suspense>

      <TextSection title={'Contact'} direction={'left'}>
        <ContactForm />
      </TextSection>
      
      <ContactSection />
      <RocketShip />
    </div>
  );
}

export default App;
