import { Button } from "../button";
import styles from "./StyleChanger.module.css";
import { observer } from "mobx-react-lite";

const StyleChanger = ({ names, onAllButtonRight, onButtonDefaultStatus }) => {
  const [one, two] = names;
  return (
    <div className={styles.container}>
      <Button name={one} event={onAllButtonRight} />
      <Button name={two} event={onButtonDefaultStatus} />
    </div>
  );
};
export default observer(StyleChanger);
