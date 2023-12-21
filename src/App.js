import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <>
    <Nav/>
      <Banner fetchUrl={requests.fetchRomanceMovies} />
      <Row isPoster={true} title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default App;
