// import { Slider } from 'infinite-react-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slide = (props) => {
  const { children, slidesToShow, items, className } = props;

  // const settings = {
  //   arrows: true,
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: slidesToShow,
  //   arrowsScroll: arrowsScroll,
  // };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      slidesToSlide: items[0],
      items: items[0],
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      slidesToSlide: items[1],
      items: items[1],
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      slidesToSlide: items[2],
      items: items[2],
    },
    bigPhone: {
      breakpoint: { max: 768, min: 640 },
      slidesToSlide: items[3],
      items: items[3],
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      slidesToSlide: items[4],
      items: items[4],
    },
  };

  return (
    <div>
      <Carousel className={className} responsive={responsive}>
        {children}
      </Carousel>
    </div>
  );
};

export default Slide;
