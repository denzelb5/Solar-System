import $ from 'jquery';
import data from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';


import './soloCard.scss';


const printSoloCard = (event) => {
  const soloPlanet = data.getPlanet(event.target.closest('.card-container').id)[0];
  const domString = `
   <div class="card-solo">
     <div class="x-box">
       <h5>X</h5>
     </div>
  
     <img src="${soloPlanet.imageUrl}" alt="Image of ${soloPlanet.name}">
     <div class="card-body">
       <p class="card-text">${soloPlanet.description}</p>
       <div class="info-container">
        <ul>
          <li>Gas Planet: ${soloPlanet.isGasPlanet}</li>
          <li>Number of Moons:  ${soloPlanet.numberOfMoons}</li>
          <li>Largest Moon: ${soloPlanet.nameOfLargestMoon}</li>
        </ul>
       </div>
     </div>
   </div>
   `;
  utilities.printToDom(domString, 'soloview');
  $('#planets').hide();
  $('#soloview').show();
};

const showSoloPlanetView = () => {
  $(document).on('click', '.card-container', printSoloCard);
};


const closeSoloPlanet = () => {
  $(document).on('click', 'h5', () => {
    $('#soloview').hide();
    $('#planets').show();
  });
};

export default { showSoloPlanetView, closeSoloPlanet };
