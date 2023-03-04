import './App.css';
import ImageSection from './components/ImageSection/ImageSection';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header" id="home">
       
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl md:text-5xl font-Blackout leading-none'>
            Grow your <br />brand
          </h1>
          <h2 className="text-xl md:text-2xl font-Russo tracking-wider">Digital Strategy // Marketing</h2>
        </div>
      </header>
      <ImageSection image={'/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'} />
    </div>
  );
}

export default App;
