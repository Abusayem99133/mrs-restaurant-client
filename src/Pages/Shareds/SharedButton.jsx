const SharedButton = ({ button }) => {
  return (
    <div className="text-center my-12">
      <button className="border-b-4 rounded-bl-2xl rounded-br-2xl px-3 py-4 text-2xl uppercase font-medium hover:cursor-pointer">
        {button}
      </button>
    </div>
  );
};

export default SharedButton;
