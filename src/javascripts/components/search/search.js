import $ from 'jquery';
import p from '../../helpers/data/planets';
// import utilities from '../../helpers/utilities';

const init = () => {
  $('body').on('keyup', () => {
    const value = $('#user-input').val().toLowerCase();
    const planets = p.getPlanets();
    // const findMatch = planets.filter((x) => x.name.toLowerCase().includes(value));
    $('.card-container').filter((x) => )
  });
};


export default { init };

// const searchBox = (value) => {
//   value = $('user-input').value().toLowerCase();
//   if (value === planet.description.toLowerCase()) {
//     utilities.printToDom()
//   }
// };

// const searchBox = () => {
//   const planets = p.getPlanets();
//   const searchArray = [];
//   const value = $('#user-input').val().toLowerCase();
//   const findMatch = $(`${planets.name.toLowerCase()}`).filter((x) => x === value);
//   console.error('hello', value);
//   searchArray.push(findMatch());
//   utilities.printToDom(searchArray, '.card-solo');
// };

// const printSearchResult = () => $('#user-input').on('keyup', searchBox);
