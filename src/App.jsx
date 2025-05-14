import { useState } from "react";

import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";

import { INPUTS } from "./constants";
import { Result } from "./components/Result";
import { calculateInvestmentResults } from "./utils/investment";

function App() {
  const initialUserInputs = [...INPUTS].reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = item.value;
    }
    return acc;
  }, {});

  const [userInputs, setUserInputs] = useState(initialUserInputs);

  const handleChangeUserInput = (userInputName, newValue) => {
    setUserInputs((prevUserInputs) => {
      return { ...prevUserInputs, [userInputName]: +newValue };
    });
  };

  const investmentResults = calculateInvestmentResults({ ...userInputs });

  const isUserInputsValid = userInputs["duration"] > 0;

  return (
    <>
      <Header />
      <main>
        <section id="user-inputs">
          {INPUTS.map(({ name, label }) => {
            return (
              <UserInput
                key={name}
                label={label}
                name={name}
                value={userInputs[name]}
                onChange={handleChangeUserInput}
              />
            );
          })}
          {!isUserInputsValid && (
            <span className="error-text">
              The value of duration can't be less than 1!
            </span>
          )}
        </section>
        {isUserInputsValid && <Result investmentResults={investmentResults} />}
      </main>
    </>
  );
}
export default App;
