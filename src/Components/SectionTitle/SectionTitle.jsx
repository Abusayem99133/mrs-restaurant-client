const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center my-8 w-3/12">
      <p className="text-[#D99904] mb-2">---{subHeading}---</p>
      <h3 className="text-[#151515] font-semibold text-3xl uppercase border-y-2 py-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
