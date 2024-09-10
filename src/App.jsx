import { useState } from "react";
import dollar from "./assets/icon-dollar.svg";
import people from "./assets/icon-person.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [error, setError] = useState(false);
  const [tipPercentage, setTipPercentage] = useState(0);
  const twoDecimal = (x) => {
    return Number(parseFloat(x).toFixed(2));
  };

  const perPersonBill = bill / numPeople;
  const perPersonTip =
    numPeople > 0 ? twoDecimal(perPersonBill * (tipPercentage / 100)) : 0;
  const perPersonTotal =
    numPeople > 0 ? twoDecimal(perPersonBill + perPersonTip) : 0;
  const handleChangetotalAmount = (e) => {
    setBill(Number(e.target.value));
  };
  const handleChangeNumPeople = (e) => {
    setNumPeople(e.target.value);
    if (numPeople === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const resetBill = () => {
    setBill("");
    setNumPeople("");
    setTipPercentage(0);
  };
  const changeTipPercentage = (percentage) => {
    setTipPercentage(percentage);
  };

  return (
    <div>
      <h1 className="md:text-4xl text-3xl tracking-wide text-center  text-Verydarkcyan p-12 md:p-auto">
        SPLI
        <br />
        TTER
      </h1>
      <div className="grid place-items-center ">
        <div className="bg-White rounded-2xl md:p-6 p-8 flex md:flex-row flex-col justify-between gap-6">
          <div className="md:w-[50%]">
            <h4 className="text-Darkgrayishcyan uppercase pb-1">BILL</h4>
            <div className="flex items-center justify-normal relative">
              <img className="absolute left-4 bottom-1/2" src={dollar} alt="" />
              <input
                className="p-3 rounded-lg bg-Verylightgrayishcyan mb-4 placeholder:font-bold placeholder:text-Strongcyan placeholder:text-right w-full font-bold text-right text-Verydarkcyan text-xl"
                type="number"
                placeholder="0"
                value={bill}
                name="bill"
                onChange={handleChangetotalAmount}
              />
            </div>

            <h4 className="text-Darkgrayishcyan pb-2">Select Tip %</h4>
            <div className="grid gap-3 md:grid-cols-3 grid-cols-2">
              <button
                onClick={()=>changeTipPercentage(5)}
                className={`rounded-lg px-4 py-2 mt-3  md:w-24  font-bold text-lg focus:bg-Strongcyan ${tipPercentage=== 5? `bg-Strongcyan text-black`: `bg-Verydarkcyan text-White`}`}
              >
                5%
              </button>
              <button
                onClick={()=>changeTipPercentage(10)}
                className="rounded-lg px-4 py-2 mt-3 bg-Verydarkcyan  md:w-24  text-White font-bold text-lg focus:bg-Strongcyan"
              >
                10%
              </button>
              <button
                onClick={()=>changeTipPercentage(15)}
                className="rounded-lg px-4 py-2 mt-3 bg-Verydarkcyan  md:w-24 text-White font-bold text-lg focus:bg-Strongcyan"
              >
                15%
              </button>
              <button
                onClick={()=>changeTipPercentage(25)}
                className="rounded-lg px-4 py-2 mt-3 bg-Verydarkcyan  md:w-24 text-White font-bold text-lg focus:bg-Strongcyan"
              >
                25%
              </button>
              <button
                onClick={()=>changeTipPercentage(50)}
                className="rounded-lg px-4 py-2 mt-3 bg-Verydarkcyan  md:w-24 text-White font-bold text-lg focus:bg-Strongcyan"
              >
                50%
              </button>
              <input
                className="rounded-lg px-4 py-2 mt-3 bg-Verylightgrayishcyan font-bold  md:w-24 placeholder:text-sm"
                type="number"
                placeholder="Custom"
                onChange={(e) => changeTipPercentage(Number(e.target.value))}
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-Darkgrayishcyan capitalize pt-6 pb-2">
                  Number of people
                </h2>
                {error && (
                  <p className={error ? `text-red-500` : `text-black`}>
                    Can't be zero
                  </p>
                )}
              </div>
              <div className="flex items-center justify-normal relative">
                <img
                  className="absolute left-4 bottom-1/2 top-1/2"
                  src={people}
                  alt=""
                />
                <input
                  className="rounded-lg px-4 py-2 mt-3 bg-Verylightgrayishcyan font-bold text-lg w-full text-right placeholder:text-right"
                  type="number"
                  name="numPeople"
                  value={numPeople}
                  placeholder="0"
                  onChange={handleChangeNumPeople}
                />
              </div>
            </div>
          </div>
          <div className="bg-Verydarkcyan p-6 rounded-xl flex flex-col gap-7">
            <div className="flex justify-between items-center w-full gap-20">
              <div className="flex flex-col items-start">
                <h5 className="text-White text-base text-nowrap">Tip Amount</h5>
                <p className="text-Grayishcyan">/person</p>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-6 h-6" src={dollar} alt="Dollar sign" />
                <p className="md:text-5xl text-4xl text-Strongcyan font-bold">
                  {perPersonTip.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full gap-28">
              <div className="flex flex-col items-start">
                <h5 className="text-White text-base text-nowrap">Total</h5>
                <p className="text-Grayishcyan">/person</p>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-6 h-6" src={dollar} alt="Dollar sign" />
                <p className="md:text-5xl text-4xl text-Strongcyan font-bold">
                  {perPersonTotal.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className={` px-4 py-2 rounded-lg font-bold md:mt-16 mt-6 ${
                perPersonTip !== 0 && perPersonTotal !== 0
                  ? `bg-Strongcyan`
                  : `bg-Darkgrayishcyan`
              }`}
              onClick={resetBill}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
