import utilities from '../../helpers/utilities';
import './planetCards.scss';

const printPlanetCards = (planetArray) => {
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

export default { printPlanetCards };
