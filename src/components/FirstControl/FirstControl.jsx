import { Button } from "../button";
import { Input } from "../input";
import styles from "./FirstControl.module.css";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { useState } from "react";
import { onlyNumbers } from "../../helpers/onlyNumber";

const FirstControl = ({ buttonChangerInstance }) => {
  const [inputValue, setInputValue] = useState("");
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Button
        name={buttonChangerInstance.FirstButtonName}
        style={toJS(buttonChangerInstance.buttonOrder)}
        event={() =>
          buttonChangerInstance.FirstButtonName === "Alert!"
            ? alert(inputValue)
            : setInputValue("")
        }
      />
      <Input value={inputValue} onChange={inputChange} />
      <Button
        name={buttonChangerInstance.SecondButtonName}
        event={() =>
          buttonChangerInstance.SecondButtonName === "Only Number!"
            ? onlyNumbers(inputValue)
            : setInputValue("Hello world!")
        }
      />
    </div>
  );
};

export default observer(FirstControl);
