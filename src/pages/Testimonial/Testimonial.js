import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.scss'
import LightSpeed from 'react-reveal/LightSpeed';

const Testimonial = () =>{

  const data = [
    {
      name: 'karol',
      position: 'CEO',
      des: 'I liked his work',
      img: 'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg'
    },

    {
      name: 'Leo',
      position: 'CEO',
      des: 'I liked his work',
      img: 'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg'
    },

    {
      name: 'kici',
      position: 'CEO',
      des: 'I liked his work',
      img: 'https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg'
    },

    {
      name: 'kocia',
      position: 'CEO',
      des: 'I liked his work',
      img: 'https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647_1280.jpg'
    },

    {
      name: 'Szabla',
      position: 'CEO',
      des: 'I liked his work',
      img: 'https://cdn.pixabay.com/photo/2016/02/01/16/10/eye-1173863_1280.jpg'
    },

    {
      name: 'Daro',
      position: 'CEO',
      des: 'I liked his work',
      img: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return(
    <div className='container testimonial-section' id="testimonial">
      <div className='section-title'>
        <h5>Testimonial</h5>
        <span className='line'></span>
      </div>
      <LightSpeed left>
        <div className="testimonial-slider">
          <Slider {...settings}>
            {data.map((item, index)=>(
              <div className="content-slider-main" key={index}>
                <div className="content-slider" key={index}>
                  <img src={item.img} alt="img" className="center-image"/>
                  <p>{item.des}</p>
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </LightSpeed>
    </div>
  )
}

export default Testimonial;