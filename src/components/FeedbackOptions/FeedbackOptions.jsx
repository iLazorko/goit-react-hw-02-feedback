export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(keyName => (
    <button
      type="button"
      key={keyName}
      onClick={onLeaveFeedback}
      name={keyName}
    >
      {keyName}
    </button>
  ));
}
