import Carousel from '@brainhubeu/react-carousel';
// import Icon from 'react-fa';

import Project from '../project';

import one from './img/test1.png';
import two from './img/test2.png';
import three from './img/test3.png';


const Caro = () => {
  return (
    <Carousel
    arrows
    >
        <img src={one} />
        <img src={two} />
        <img src={three} />
    </Carousel>
  );
}
export default Caro;