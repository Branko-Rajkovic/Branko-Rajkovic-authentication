import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-sky-950">
      <h1 className="font-bold text-white p-4">Node & React Authentication</h1>
      <ul className="flex justify-start gap-4 font-bold text-yellow-200">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/sign-in">
          <li>Sign In</li>
        </Link>
      </ul>
    </div>
  );
}
