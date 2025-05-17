const ResultPanel = ({ tipAmount, totalAmount, onReset }) => {
  return (
    <section className="results-container bg-neutral-green-900 rounded-2xl px-6 py-8 text-white w-full flex flex-col gap-12 justify-between lg:flex-1 ">
      <div className=" flex flex-col gap-12 justify-between">
        <div className="flex justify-between">
          <label className="flex flex-col text-sm text-neutral-grey-200 mb-1">
            <span className="font-bold text-base text-white">Tip Amount</span>
            <span className="font-bold text-sm text-neutral-grey-400">
              / person
            </span>
          </label>
          <div className="text-4xl font-bold text-primary-green-400 tracking-[-0.67px] md:text-5xl">
            ${tipAmount}
          </div>
        </div>

        <div className="flex justify-between">
          <label className="flex flex-col text-sm text-neutral-grey-200 mb-1">
            <span className="font-bold text-base text-white">Total</span>
            <span className="font-bold text-sm text-neutral-grey-400">
              / person
            </span>
          </label>
          <div className="text-4xl font-bold text-primary-green-400 tracking-[-0.67px] md:text-5xl">
            ${totalAmount}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full bg-neutral-green-750 text-neutral-green-800 font-bold text-xl text-center px-8 py-2 rounded-md uppercase tracking-widest cursor-pointer hover:bg-neutral-green-200 hover:text-neutral-green-900"
      >
        Reset
      </button>
    </section>
  );
};

export default ResultPanel;