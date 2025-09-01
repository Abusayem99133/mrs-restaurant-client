import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shareds/MenuItem/MenuItem";
import SharedButton from "../../Shareds/SharedButton";
import CallUs from "../Home/CallUs";
import useMenu from "../../../hooks/useHoks";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item?.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading="Popular Items"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {popular?.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>
      <div>
        <SharedButton button="View Full Menu" />
      </div>
      <div>
        <CallUs />
      </div>
    </section>
  );
};

export default PopularMenu;
