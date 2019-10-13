import $ from 'jquery';


const hideName = (event) => {
  $(event.target).find('h3').toggleClass('d-none');
  $('h6').hide();
};

const attachFirstEvents = () => {
  $('.card-container').hover(hideName);
};

const showPlanets = (event) => {
  $(event.target).find('img').toggleClass('d-none');
};

const attachEvents = () => {
  $('.card-container').hover(showPlanets);
};


export default { attachFirstEvents, attachEvents };
