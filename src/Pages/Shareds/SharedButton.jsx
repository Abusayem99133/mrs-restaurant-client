const SharedButton = ({ button }) => {
  return (
    <div className="text-center my-6">
      <button className="border-b-4 rounded-bl-2xl rounded-br-2xl px-3 py-4 text-xl uppercase font-normal hover:cursor-pointer">
        {button}
      </button>
    </div>
  );
};

export default SharedButton;
