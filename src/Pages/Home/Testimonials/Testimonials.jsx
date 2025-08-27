import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);
  console.log(testimonial);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      />
      <div>
        {" "}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonial?.map((review) => (
            <SwiperSlide>
              <h2>{review?.name}</h2>
              <h3>{review?.rating}</h3>
              <p>{review?.details}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
