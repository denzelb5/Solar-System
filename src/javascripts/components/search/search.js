import $ from 'jquery';
import p from '../../helpers/data/planets';
import planet from '../cards/planetCards';

const init = () => {
  $('body').on('keyup', () => {
    const value = $('#user-input').val().toLowerCase();
    const planets = p.getPlanets();
    const findMatch = planets.filter((x) => x.name.toLowerCase().includes(value));
    planet.printPlanetCards(findMatch);
  });
};


export default { init };
