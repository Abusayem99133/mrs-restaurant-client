import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        console.log("User Logged out successfully!");
        toast.success("Successfully LogOut");
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link className="hover:bg-slate-100 hover:text-black  " to={"/"}>
          Home
        </Link>
      </li>

      <li>
        <Link className="hover:bg-slate-100 hover:text-black" to={"/contact"}>
          Contact Us
        </Link>
      </li>

      <li>
        <Link
          className="hover:bg-slate-100 hover:text-black  "
          to={"/dashboard"}
        >
          Dashboard
        </Link>
      </li>

      <li>
        <Link className="hover:bg-slate-100 hover:text-black  " to={"/menu"}>
          Our Menu
        </Link>
      </li>

      <li>
        <Link
          className="hover:bg-slate-100 hover:text-black  "
          to={"/order/salad"}
        >
          Our Shop
        </Link>
      </li>
      <li>
        {" "}
        <Link to={"/dashboard/cart"}>
          {" "}
          <button className="btn md:-mt-2">
            <FaShoppingCart />
            <div className="badge badge-secondary"> +{cart?.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li className="hover:bg-slate-100 hover:text-black ">
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar max-w-screen-xl  fixed z-10  bg-black/50 text-white">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100 "
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MRS Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
