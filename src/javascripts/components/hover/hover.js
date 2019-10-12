import $ from 'jquery';
import planets from '../cards/planetCards';


const hoverImage = () => {
  planets.getPlanets();
  $('img').hide();
};

export default { hoverImage };
