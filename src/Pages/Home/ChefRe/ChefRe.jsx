import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import card1 from "../../../assets/home/slide1.jpg";
import card2 from "../../../assets/home/slide2.jpg";
import card3 from "../../../assets/home/slide3.jpg";
import { Link } from "react-router-dom";
const ChefRe = () => {
  return (
    <section>
      <SectionTitle subHeading="Should Try" heading="Chef Recommends" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto items-center text-center ">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={card1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <Link>
                {" "}
                <button className="btn btn-outline border-b-4 border-yellow-500 text-yellow-600">
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={card2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pizzas</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <Link>
                {" "}
                <button className="btn btn-outline border-b-4 border-yellow-500  text-yellow-600 bg-[#1F2937]">
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={card3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Soups</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <Link>
                {" "}
                <button className="btn btn-outline border-b-4 border-yellow-500 text-yellow-600">
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRe;
