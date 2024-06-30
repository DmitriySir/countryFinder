import { getCountryByName } from "../../api/apiService";
import { Input } from "../input";
import styles from "./SecondControl.module.css";
import { useState, useEffect } from "react";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { observer } from "mobx-react-lite";

const SecondControl = ({ buttonChangerInstance }) => {
  const [countryName, setCountryName] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    if (countryName) {
      getCountryByName(countryName).then((result) => {
        setSearchResult(result);
      });
    } else {
      setSearchResult("");
    }
  }, [countryName]);

  const handleInputChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleItemSelected = (selectedValue) => {
    setCountryName(selectedValue);
  };

  return (
    <div className={styles.container}>
      <p>Введите название страны на русском языке:</p>
      <Input value={countryName} onChange={handleInputChange} />
      {searchResult.length > 0 && (
        <Autocomplete
          result={searchResult}
          onItemSelected={handleItemSelected}
          tip={buttonChangerInstance.tip}
        />
      )}
    </div>
  );
};

export default observer(SecondControl);
