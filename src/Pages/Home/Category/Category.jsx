import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import chefService from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <div>
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"Order Online"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlide={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className="text-3xl text-white text-center -mt-16 uppercase">
              Salads
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className="text-3xl text-white text-center -mt-16 uppercase">
              Pizzas
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className="text-3xl text-white text-center -mt-16 uppercase">
              Soups
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className="text-3xl text-white text-center -mt-16 uppercase">
              Desserts
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className="text-3xl text-white text-center -mt-16 uppercase">
              Salads
            </h1>
          </SwiperSlide>
        </Swiper>
        <div>
          <div
            className="hero mt-12 bg-fixed"
            style={{
              backgroundImage: `url(${chefService})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content min-h-screen text-center">
              <div className=" bg-slate-100 h-80 pt-28 p-8">
                <h1 className="mb-5 text-5xl font-bold">MRS Restaurant</h1>
                <p className="mb-5">
                  MRS Restaurant is a cozy dining spot offering a delightful mix
                  of flavorful dishes, fresh ingredients, and warm hospitality.
                  Perfect for casual meals, family gatherings, or enjoying your
                  favorite comfort foods in a welcoming atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
