import styles from "./ButtonComp.module.css";

const ButtonComp = ({ onbtnclick }) => {
  const letters = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.button}>
      {letters.map((letters) => (
        <button
          className={styles.innerbutton}
          onClick={() => onbtnclick(letters)}
        >
          {letters}{" "}
        </button>
      ))}
    </div>
  );
};

export default ButtonComp;
