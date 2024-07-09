import s from "./Options.module.css";

const Options = ({ onFeedback, total, reset }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={s.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
