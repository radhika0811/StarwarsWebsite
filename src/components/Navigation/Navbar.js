import { Link } from "react-router-dom";
const Navbar = ({ handleSignOut, auth }) => {
  return (
    <nav>
      <div className="nav-1">
        {auth.user ? (
          <>
            <span className="user">{auth.user}</span>
          </>
        ) : (
          <Link className="link-2" to="/">You're Not Logged In</Link>
        )}
      </div>
      <div className="nav-2">
        <Link className="link-1" to="/home">
          Home
        </Link>
        <Link className="link-1" to="/about">
          About
        </Link>
        <Link className="link-1" to="/contact">
          Contact
        </Link>
        <button className="btn-logout" onClick={handleSignOut}>Logout</button>
      </div>
    </nav>
  );
};
export default Navbar;
