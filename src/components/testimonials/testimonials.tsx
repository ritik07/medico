import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import k from "./assets/k.jpeg";
import r from "./assets/r.jpeg";
import rc from "./assets/rc.jpeg";
import dummy from "./assets/dummy.png"; // Assuming you have a dummy image

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kushal Dev - Semey Medical University, 2021",
    quote: `"I’m incredibly grateful to MOC for guiding me through my journey at Semey Medical University. The support and expertise they provided made the entire process seamless. Thanks to MOC, I was able to fulfill my dream of becoming a doctor. Highly recommended!"`,
    image: k,
  },
  {
    name: "Ravi Joshi - Caspian Medical University, 2021",
    quote: `"MOC played a crucial role in helping me secure admission to Caspian Medical University. Their team was always there to assist with any queries and made sure everything went smoothly. Studying abroad was a life-changing experience, and I owe it all to MOC."`,
    image: r,
  },
  {
    name: "Rajesh Choudhary - Caspian Medical University, Almaty, 2023",
    quote: `"I am so grateful to MOC for their unwavering support during my studies at Caspian Medical University in Almaty. They made the entire process smooth and worry-free, from application to graduation. MOC is the best partner you can have on your journey to becoming a doctor."`,
    image: rc,
  },
  {
    name: "Raja Patni - Semey Medical University, 2021",
    quote: `"Thanks to MOC, I successfully completed my MBBS at Semey Medical University. Their guidance was invaluable, and they made the entire process stress-free. I can’t thank them enough for helping me achieve my dreams."`,
    image: dummy,
  },
  {
    name: "Kushagra Agarwal - Russia, 2022",
    quote: `"MOC made my dream of studying in Russia a reality. From choosing the right university to handling all the paperwork, they took care of everything. Their professionalism and dedication are unmatched. I highly recommend MOC to anyone looking to study MBBS abroad."`,
    image: dummy,
  },
  {
    name: "Anjani Sharma - Kyrgyzstan, 2023",
    quote: `"I had an amazing experience with MOC. They helped me every step of the way, from applying to studying in Kyrgyzstan. The entire process was smooth, and I felt supported throughout. MOC is the best choice for anyone looking to pursue MBBS abroad!"`,
    image: dummy,
  },
  {
    name: "Dr. Vinay Choudhary - Caspian University Almaty, 2023",
    quote: `"Choosing to study MBBS at Caspian University, Almaty through MOC was one of the best decisions of my life. The guidance and support from MOC made my journey smooth and stress-free. The quality of education, modern facilities, and the diverse environment at Caspian University provided me with a solid foundation for my medical career. I am proud to be a 2023 pass-out from such a prestigious institution. Thank you, MOC, for helping me achieve my dream!"`,
    image: dummy,
  },
  {
    name: "Yogendra Gurjar - West Kazakhstan Medical University, Aktobe",
    quote: `"MOC made my dream of studying abroad a reality. Their guidance and support throughout my time at West Kazakhstan Medical University in Aktobe were exceptional. They took care of everything, making the process stress-free. I highly recommend MOC to anyone looking to pursue their MBBS abroad!"`,
    image: dummy,
  },
  {
    name: "Jagdish Fulwariya - West Kazakhstan Medical University, Aktobe",
    quote: `"Choosing MOC was the best decision I made for my medical education. Their expertise and assistance were crucial in helping me succeed at West Kazakhstan Medical University. MOC truly cares about its students and goes above and beyond to ensure their success."`,
    image: dummy,
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
