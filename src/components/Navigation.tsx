import { Link } from "@tanstack/react-router";

const Navigation = ({}) => {
  return (
    <div className="bg-black p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/hiscore">
              Hiscore
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
