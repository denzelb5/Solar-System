import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './planetCards.scss';

const printPlanetCards = () => {
  const planetArray = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planetArray.length; i += 1) {
    const planet = planetArray[i];
    domString += `
    <div id="container" class="card-container col-5">
      <div class="card">
        <h3 id="planet-name">${planet.name}</h3>
        <img src="${planet.imageUrl}" class="d-none" alt="...">
      </div>
    </div>
    `;
  }
  utilities.printToDom(domString, 'planets');
};
//   $(() => {
//     $('img').hide();
//     $('.col-5').each((index, card) => {
//       $(card).hover(() => {
//         $('#planet-name$').hide();
//         $('img').show();
//         // $('img').animate({
//         //   height: '+=100px',
//         //   width: '+=100px',
//         // });
//       }, () => {
//         $('#planet-name').show();
//         $('img').hide();
//         // $('img').animate({
//         //   height: '-=100px',
//         //   width: '-=100px',
//         // });
//       });
//     });
//   });
// };

const hideName = (event) => {
  $(event.target).find('h3').toggleClass('d-none');
};

const showPlanets = (event) => {
  $(event.target).find('img').toggleClass('d-none');
};

const attachEvents = () => {
  $('.card-container').hover(showPlanets);
};

const attachFirstEvents = () => {
  $('.card-container').hover(hideName);
};

export default { printPlanetCards, attachFirstEvents, attachEvents };
