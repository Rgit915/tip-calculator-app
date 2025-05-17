import personIcon from "../assets/images/icon-person.svg";

const BillForm = ({
  bill,
  setBill,
  tipPercent,
  setTipPercent,
  people,
  setPeople,
  error,
}) => {
  const tipOptions = ["5", "10", "15", "25", "50"];
  return (
    <section className="bill-container w-full lg:flex-1">
      <form>
        <label htmlFor="bill" className="block mb-2">
          Bill
        </label>
        <div className="bill flex justify-between items-center w-full rounded-md bg-neutral-grey-50 text-neutral-grey-800 px-4 py-2 hover:border-2 hover:border-primary-green-400 cursor-pointer">
          <label htmlFor="amount">$</label>
          <input
            id="bill"
            name="bill"
            type="text"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {tipOptions.map((tip) => (
              <button
                key={tip}
                type="button"
                onClick={() => setTipPercent(tip)}
                className="bg-neutral-grey-800 text-white text-2xl font-bold py-2 rounded-md hover:bg-neutral-green-200 hover:text-neutral-green-900 cursor-pointer"
              >
                {tip}%
              </button>
            ))}
            <button
              type="button"
              value={!tipOptions.includes(tipPercent) ? tipPercent : ""}
              onChange={(e) => setTipPercent(e.target.value)}
              className="bg-neutral-grey-50 text-neutral-grey-500 text-2xl font-bold py-2 rounded-md hover:bg-neutral-grey-300 cursor-pointer"
            >
              Custom
            </button>
          </div>
        </div>

        <div className="number-of-people mb-6">
          <div className="flex justify-between items-center">
            <label
              htmlFor="people"
              className="block text-neutral-grey-500 font-bold mb-2"
            >
              Number of People
            </label>
            {error && (
              <p className="text-neutral-orange-400 text-base leading-6 font-bold text-right mb-2 ">
                {error}
              </p>
            )}
          </div>
          <div
            className={`people flex items-center w-full rounded-md px-4 py-2
    bg-neutral-grey-50 text-neutral-grey-800
    ${error ? "border-2 border-neutral-orange-400" : ""}`}
          >
            <img src={personIcon} alt="Person icon" className="w-3 h-4" />
            <input
              id="people"
              name="people"
              type="text"
              placeholder="0"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="ml-4 w-full bg-transparent text-right outline-none placeholder:text-neutral-grey-400"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default BillForm;
