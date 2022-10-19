export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  let span;
  if (positivePercentage > 0) {
    span = <span>{positivePercentage}%</span>;
  } else {
    span = <span>0%</span>;
  }
  return (
    <div>
      <p>Statistics</p>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback:
        {span}
      </p>
    </div>
  );
}
