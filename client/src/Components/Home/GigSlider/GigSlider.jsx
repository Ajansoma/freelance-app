import SliderItem from './SliderItem';
import Slide from '../../../UI/Slide';
import { cards } from '../../../data';

const GigSlider = () => {
  return (
    <div className="mx-9 pt-16 pb-16 flex justify-between relative md:mx-16 lg:mx-32">
      <div className="w-full">
        <Slide items={[5, 4, 3, 2, 1]}>
          {cards?.map((card) => (
            <SliderItem card={card} key={card.id} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default GigSlider;
