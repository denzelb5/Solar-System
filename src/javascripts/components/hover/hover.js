import $ from 'jquery';
import planets from '../cards/planetCards';


const hoverImage = () => {
  // eslint-disable-next-line prefer-arrow-callback
  // eslint-disable-next-line func-names
  $(document).ready(() => {
    $('#container').hover(() => {
      $(this).css('background-color', 'green');
    }, () => {
      $(this).css('background-color', 'yellow');
    });
  });
};

export default { hoverImage };
