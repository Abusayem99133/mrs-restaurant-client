import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);
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
            <SwiperSlide key={review?._id}>
              <div className="flex flex-col items-center mx-24 mt-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <span className="text-6xl mt-8">
                  <FaQuoteLeft />
                </span>
                <p className="py-8">{review?.details}</p>
                <h2 className="text-2xl text-orange-400">{review?.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
