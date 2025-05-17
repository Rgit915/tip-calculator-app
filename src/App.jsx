import { useState } from "react";
import Header from "./components/Header";
import BillForm from "./components/BillForm";
import ResultPanel from "./components/ResultPanel";

const App = () => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [people, setPeople] = useState("");
  const [error, setError] = useState("");

  const billAmount = parseFloat(bill) || 0;
  const tip = parseFloat(tipPercent) || 0;
  const numPeople = parseInt(people) || 1;

  const tipAmount = numPeople > 0 ? (billAmount * (tip / 100)) / numPeople : 0;
  const totalAmount =
    numPeople > 0 ? (billAmount + billAmount * (tip / 100)) / numPeople : 0;

  const handleReset = () => {
    setBill("");
    setTipPercent("");
    setPeople("");
  };

  const handlePeopleChange = (value) => {
  setPeople(value);
  if (parseInt(value) === 0) {
    setError("Can't be zero");
  } else {
    setError("");
  }
};


  return (
    <>
      <Header />

      <main>
        <BillForm
          bill={bill}
          setBill={setBill}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          people={people}
          setPeople={handlePeopleChange}
          error={error}
        />

        <ResultPanel
          tipAmount={tipAmount.toFixed(2)}
          totalAmount={totalAmount.toFixed(2)}
          onReset={handleReset}
        />
      </main>
    </>
  );
};

export default App;
