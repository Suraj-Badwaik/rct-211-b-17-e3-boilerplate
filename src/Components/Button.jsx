import "./Button.css";

export const Button = ({ colorScheme, variant, size }) => {
  return <button className={`${colorScheme} ${variant} ${size}` || "default"}>Click</button>;
};
