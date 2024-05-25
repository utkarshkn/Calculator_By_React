import styles from "./InputComp.module.css";

const InputComp = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
};

export default InputComp;
