import { lazy, Suspense } from 'react';
import './App.css';
import ContactSection from './components/ContactSection';
import NavBar from './components/NavBar';
import RocketShip from './components/RocketShip';
import Services from './components/Services';
import Loader from './components/_common/Loader';
import TextBlock from './components/_common/TextBlock';
import TextSection from './components/_common/TextSection';
const ImageSection = lazy(() => import('./components/_common/ImageSection'));
const HeadingSection = lazy(() => import('./components/HeadingSection'));

function App() {
  return (
    <div className="App overflow-hidden">
      <NavBar />
      <Suspense fallback={<Loader />}>
        <HeadingSection />
      </Suspense>

      <TextSection title={'About us'} direction={'right'}>
        <TextBlock 
          textBlockOne={"We are a canadian based advertising agency, but our clients and reach stretch around the globe. We believe that any business can succeed."}
          textBlockTwo={"Our mission is to heighten the potency of your marketing efforts by giving you the most effective ad stragety possible."}
        />
      </TextSection>

      <Suspense fallback={<Loader />}>
        <ImageSection image={'./greg-rakozy-oMpAz-DN-9I-unsplash.jpg'} />
      </Suspense>

      <TextSection title={'What we do'} direction={'left'}>
        <TextBlock 
          textBlockOne={"We support you by expanding or developing your business's organic growth and brand recognition."}
          textBlockTwo={"We do this by supplementing your natural appeal with our expertise in ad buys."}
        />
      </TextSection>

      <Suspense fallback={<Loader />}>
        <ImageSection image={'./nasa-Q1p7bh3SHj8-unsplash.jpg'} />
      </Suspense>

      <TextSection title={'Our services'} direction={'right'}>
        <Services />
      </TextSection>

      <Suspense fallback={<Loader />}>
        <ImageSection image={'./space-illustration-with-moon-and-planet-in-space-2021-08-26-17-37-33-utc.jpg'} />
      </Suspense>

      <ContactSection />      
      
      <RocketShip />
    </div>
  );
}

export default App;
