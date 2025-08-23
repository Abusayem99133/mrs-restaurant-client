import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import SharedButton from "../../Shareds/SharedButton";
import "../Featured/Featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 29, 2025</p>
          <p className="uppercase">Where can i get some? </p>
          <p>
            You can enjoy a variety of delicious dishes at MRS Restaurant, where
            quality food meets a cozy atmosphere. Whether you’re dining in,
            taking away, or ordering online, MRS Restaurant is always ready to
            serve you with love and care.”
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
