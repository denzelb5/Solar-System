// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './planetCards.scss';

const printPlanetCards = () => {
  const planetArray = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planetArray.length; i += 1) {
    const planet = planetArray[i];
    domString += `
    <div id="${planet.name.toLowerCase()}" class="card-container">
      <div class="card">
        <h3 class="planet-name">${planet.name}</h3>
        <img src="${planet.imageUrl}" class="d-none" alt="...">
        <p class="d-none">${planet.description}</p>
      </div>
    </div>
    `;
  }
  utilities.printToDom(domString, 'planets');
};

// const hideName = (event) => {
//   $(event.target).find('h3').toggleClass('d-none');
//   $('h6').hide();
// };

// const showPlanets = (event) => {
//   $(event.target).find('img').toggleClass('d-none');
// };

// const attachEvents = () => {
//   $('.card-container').hover(showPlanets);
// };

// const attachFirstEvents = () => {
//   $('.card-container').hover(hideName);
// };

// const showSinglePlanet = () => {
//   $(document).on('click','.card', )
// }


export default { printPlanetCards };
