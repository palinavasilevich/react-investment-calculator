export const UserInput = ({ name, label, value, onChange, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className={value < 1 ? "error" : ""}
        type="number"
        required
        min={0}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        {...props}
      />
    </div>
  );
};
