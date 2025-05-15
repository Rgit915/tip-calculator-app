import Header from "./components/Header";
import BillForm from "./components/BillForm";
import ResultPanel from "./components/ResultPanel";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 p-4">
        <BillForm />
        <ResultPanel />
      </main>
    </>
  );
};

export default App;
