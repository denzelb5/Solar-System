import 'bootstrap';
import '../styles/main.scss';
import planet from './components/cards/planetCards';
import hov from './components/hover/hover';
import solo from './components/soloCard/soloCard';
import search from './components/search/search';

const init = () => {
  planet.printPlanetCards();
  hov.attachEvents();
  hov.attachFirstEvents();
  solo.showSoloPlanetView();
  solo.showMoveInfo();
  solo.closeSoloPlanet();
  search.init();
};

init();
