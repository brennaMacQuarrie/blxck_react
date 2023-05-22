import { lazy, Suspense } from 'react';
import './App.css';
import ContactSection from './components/ContactSection';
import HeadingSection from './components/HeadingSection';
import NavBar from './components/NavBar';
import RocketShip from './components/RocketShip';
import Services from './components/Services';
import Loader from './components/_common/Loader';
import TextBlock from './components/_common/TextBlock';
import TextSection from './components/_common/TextSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const ImageSection = lazy(() => import('./components/_common/ImageSection'));

function App() {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <Suspense fallback={<Loader />}>
      <div className="App overflow-hidden">
        <NavBar />
        <HeadingSection />

        <TextSection title={'about us'} direction={'right'}>
          <TextBlock 
            textBlockOne={"We are a Canadian advertising agency, but our clients and reach stretch around the globe. We believe any business can succeed."}
            textBlockTwo={"Our mission is to heighten the potency of your marketing efforts by giving you the most effective ad stragety possible."}
          />
        </TextSection>

        <ImageSection desktopURL="./LG_greg-rakozy-oMpAz-DN-9I-unsplash.jpg" mobileURL="./SM_greg-rakozy-oMpAz-DN-9I-unsplash.jpg" />

        <TextSection title={'what we do'} direction={'left'}>
          <TextBlock 
            textBlockOne={"We support you by developing or expanding your business's organic growth and brand recognition."}
            textBlockTwo={"We do this by supplementing your natural appeal with our expertise in ad buys."}
          />
        </TextSection>

        <ImageSection desktopURL="./LG_nasa-Q1p7bh3SHj8-unsplash.jpg" mobileURL="./SM_nasa-Q1p7bh3SHj8-unsplash.jpg" />

        <TextSection title={'our services'} direction={'right'}>
          <Services />
        </TextSection>

        <ImageSection desktopURL='./LG_space-illustration-with-moon-and-planet-in-space-2021-08-26-17-37-33-utc.jpg' mobileURL='SM_space-illustration-with-moon-and-planet-in-space-2021-08-26-17-37-33-utc.jpg' />

        <ContactSection />      
        
        <RocketShip />

      </div>
    </Suspense>
  );
}

export default App;
