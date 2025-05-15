const ResultPanel = () => {
  return (
    <section className="results-container bg-neutral-green-900 rounded-2xl p-6 text-white w-full">
      <form className="space-y-6">
        <div className="flex justify-between">
          <label className="flex flex-col text-sm text-neutral-grey-200 mb-1">
            <span className="font-bold text-base text-white">Tip Amount</span>
            <span className="font-bold text-sm text-neutral-grey-400">/ person</span>
          </label>
          <div className="text-4xl font-bold text-primary-green-400 tracking-[-0.67px]">$0.00</div>
        </div>

        <div className="flex justify-between">
          <label className="flex flex-col text-sm text-neutral-grey-200 mb-1">
            <span className="font-bold text-base text-white">Total</span>
            <span className="font-bold text-sm text-neutral-grey-400">/ person</span>
          </label>
          <div className="text-4xl font-bold text-primary-green-400 tracking-[-0.67px]">$0.00</div>
        </div>

        <button
          type="button"
          className="w-full bg-neutral-green-750 text-neutral-green-800 font-bold text-xl text-center px-8 py-2 rounded-md uppercase tracking-widest"
        >
          Reset
        </button>
      </form>
    </section>
  );
};

export default ResultPanel;