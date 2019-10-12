import 'bootstrap';
import '../styles/main.scss';
import planet from './components/cards/planetCards';
// import hov from './components/hover/hover';

const init = () => {
  planet.printPlanetCards();
  planet.attachEvents();
  planet.attachFirstEvents();
};

init();
