import styles from "./Autocomplete.module.css";
import { observer } from "mobx-react-lite";

export const Autocomplete = observer(({ result, onItemSelected, tip }) => {
  const handleItemClick = (selectedValue) => {
    onItemSelected(selectedValue);
  };

  const limitedResults = result.slice(0, tip);

  return (
    <div>
      {limitedResults.map((item, index) => (
        <div
          key={index}
          className={styles.container}
          onClick={() => handleItemClick(item.fullName)}
        >
          <div className={styles.item}>{item.name}</div>
          <div>{item.fullName}</div>
          <img src={item.flag} alt="flag" className={styles.img} />
        </div>
      ))}
    </div>
  );
});
