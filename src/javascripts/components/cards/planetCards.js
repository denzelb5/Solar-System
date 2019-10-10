
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './planetCards.scss';

const printPlanetCards = () => {
  const planetArray = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planetArray.length; i += 1) {
    const planet = planetArray[i];
    domString += `
    <div id="container" class="col-5">
    <div class="one-card">
    <div class="card">
    <img src="${planet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 id="planet-name">${planet.name}</h3>
  </div>
</div>
</div>
</div>`;
  }
  utilities.printToDom(domString, 'planets');
};


export default { printPlanetCards };
