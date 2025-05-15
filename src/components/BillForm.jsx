import personIcon from "../assets/images/icon-person.svg";

const BillForm = () => {
  return (
    <section className="bill-container w-full">
      <form>
        <label htmlFor="bill" className="block mb-2">Bill</label>
        <div className="bill flex justify-between items-center w-full rounded-md bg-neutral-grey-50 text-neutral-grey-800 px-4 py-2">
          <label htmlFor="amount">$</label>
          <input
            id="bill"
            name="bill"
            type="text"
            placeholder="0"
            className="ml-4 w-full bg-transparent text-right outline-none"
          />
        </div>

        <div className="tip my-10">
          <label
            htmlFor="tip"
            className="block text-neutral-grey-500 font-bold mb-2"
          >
            Select Tip %
          </label>
          <div className="grid grid-cols-2 gap-4">
            {["5%", "10%", "15%", "25%", "50%"].map((tip) => (
              <button
                key={tip}
                type="button"
                className="bg-neutral-grey-800 text-white text-2xl font-bold py-2 rounded-md hover:bg-neutral-grey-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {tip}
              </button>
            ))}
            <button
              type="button"
              className="bg-neutral-grey-50 text-neutral-grey-500 text-2xl font-bold py-2 rounded-md hover:bg-neutral-grey-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Custom
            </button>
          </div>
        </div>

        <div className="number-of-people mb-6">
          <label
            htmlFor="people"
            className="block text-neutral-grey-500 font-bold mb-2"
          >
            Number of People
          </label>
          <div className="people flex items-center w-full rounded-md bg-neutral-grey-50 text-neutral-grey-800 px-4 py-2">
            <img src={personIcon} alt="Person icon" className="w-3 h-4" />
            <input
              id="people"
              name="people"
              type="text"
              placeholder="0"
              className="ml-4 w-full bg-transparent text-right outline-none placeholder:text-neutral-grey-400"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default BillForm;