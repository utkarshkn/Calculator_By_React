import { useState } from "react";
import styles from "./App.module.css";
import ButtonComp from "./Component/ButtonComp";
import InputComp from "./Component/InputComp";
import TitleComp from "./Component/TitleComp";

function App() {
  let [discalval, setcalval] = useState("");

  const onbtnclick = (btntext) => {
    if (btntext === "C") {
      setcalval("");
    } else if (btntext === "=") {
      const res = eval(discalval);
      setcalval(res);
    } else {
      const newsetval = discalval + btntext;
      setcalval(newsetval);
    }
  };
  return (
    <>
      <TitleComp></TitleComp>
      <div className={styles.calculator}>
        <InputComp displayValue={discalval}></InputComp>
        <ButtonComp onbtnclick={onbtnclick}></ButtonComp>
      </div>
    </>
  );
}

export default App;
