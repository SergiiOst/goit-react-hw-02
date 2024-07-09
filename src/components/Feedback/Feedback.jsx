import s from "./Feedback.module.css";

const Feedback = ({ feedback = 0, total = 0, positive = 0 }) => {
  return (
    <ul className={s.list}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral} </li>
      <li>Bad: {feedback.bad} </li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
