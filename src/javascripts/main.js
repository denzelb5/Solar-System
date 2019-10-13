import 'bootstrap';
import '../styles/main.scss';
import planet from './components/cards/planetCards';
import hov from './components/hover/hover';
import solo from './components/soloCard/soloCard';

const init = () => {
  planet.printPlanetCards();
  hov.attachEvents();
  hov.attachFirstEvents();
  solo.showSoloPlanetView();
  solo.showMoveInfo();
  solo.closeSoloPlanet();
};

init();
