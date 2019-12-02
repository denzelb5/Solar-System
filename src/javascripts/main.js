import 'bootstrap';
import '../styles/main.scss';
import planet from './components/cards/planetCards';
import hov from './components/hover/hover';
import solo from './components/soloCard/soloCard';
import search from './components/search/search';
import planets from './helpers/data/planets';


const init = () => {
  const planetArray = planets.getPlanets();

  planet.printPlanetCards(planetArray);
  hov.attachEvents();
  hov.attachFirstEvents();
  solo.showSoloPlanetView();
  solo.closeSoloPlanet();
  search.init();
};

init();
