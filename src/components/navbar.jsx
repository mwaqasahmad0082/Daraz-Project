import React, { useState } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountOfCart } from "../redux/slices/cart";
import { useNavigate } from "react-router-dom";

const NavScrollExample = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartCount = useSelector(getCountOfCart);
  const navigate = useNavigate();

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="bg-orange-700 h-auto w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-2">
          <button
            className="block lg:hidden text-white text-xl p-2"
            onClick={toggleNav}
          >
            ☰
          </button>

          <div
            className={`fixed top-0 left-0 w-full bg-orange-700 text-white transition-transform transform ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:relative lg:flex lg:flex-wrap lg:justify-start lg:text-sm lg:list-none`}
            style={{ zIndex: 50 }}
          >
            <nav className="flex flex-col lg:flex-row lg:items-center">
              <NavLink
                to="/"
                className="hover:text-orange-200 cursor-pointer p-4"
                onClick={toggleNav}
              >
                <li>Section</li>
              </NavLink>
              <NavLink
                to="/collect"
                className="hover:text-orange-200 cursor-pointer p-4"
                onClick={toggleNav}
              >
                <li>Collect</li>
              </NavLink>
              <NavLink
                to="/catgories"
                className="hover:text-orange-200 cursor-pointer p-4"
                onClick={toggleNav}
              >
                <li>Catgories</li>
              </NavLink>
              <NavLink
                to="/flash"
                className="hover:text-orange-200 cursor-pointer p-4"
                onClick={toggleNav}
              >
                <li>Flash</li>
              </NavLink>
              <NavLink
                to="/just"
                className="hover:text-orange-200 cursor-pointer p-4"
                onClick={toggleNav}
              >
                <li>Just for You</li>
              </NavLink>
            </nav>
            <div className="lg:hidden text-sm text-white bg-orange-900 h-8 w-full text-center rounded-b-lg hover:text-orange-200 mt-2">
              Save More on App
            </div>
          </div>

          <div className="hidden lg:block text-sm md:text-base text-white bg-orange-900 h-8 md:w-40 sm:w-60 text-center rounded-b-lg hover:text-orange-200 mt-2 md:mt-0">
            Save More on App
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-2">
          <div className="w-full md:w-1/5 flex justify-center md:justify-start">
            <img
              src="src/images/nav.2jpg.png"
              alt="Logo"
              className="md:h-14 h-10 pb-2 md:pb-2"
            />
          </div>

          <div className="w-full md:w-3/5">
            <input
              className="w-full p-1 md:p-3 rounded-2xl border border-gray-300"
              type="text"
              placeholder="click me"
            />
          </div>

          <div className="flex flex-wrap md:flex-row justify-evenly ml-6 items-center text-white font-bold w-full md:w-1/5 mt-2 pb-2 lg:pb-0">
            <div className="flex items-center text-xs md:text-sm lg:text-base">
              <MdOutlineManageAccounts className="text-lg md:text-xl lg:text-2xl" />{" "}
              login
            </div>
            <div className="hidden md:block mx-2">|</div>
            <div className="text-xs md:text-sm lg:text-base">logUp</div>
            {/* <div className="flex items-center text-xs md:text-sm lg:text-base">
              <TbWorld className="text-lg md:text-xl lg:text-2xl" /> EN
            </div> */}
            <button
              className="text-lg md:text-xl lg:text-2xl"
              onClick={() => navigate("/cart")}
            >
              Cart: {cartCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavScrollExample;
