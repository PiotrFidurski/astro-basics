import "./components.css";
import { Counter } from "./Counter";

export function Footer() {
  return (
    <div>
      <ul className="footer">
        <li>About</li>
        <li>Home</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>
      <Counter />
    </div>
  );
}
