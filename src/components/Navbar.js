import { NewspaperIcon } from "@heroicons/react/solid";
import React from "react";
import {Link} from "react-router-dom";

const Navbar=()=> {
    return (
      <div className="h-16 flex max-w-full px-5 bg-black text-white  font-baloo shadow-xl fixed top-0 left-0 right-0 z-10">
        <nav className="flex items-center justify-between w-full gap-9 ">
          <div className="icon">
            <Link to="/" className="flex flex-col justify-center ">
              <NewspaperIcon className="fill-white stroke-black h-10" />
              <p className="text-white text-md  font-semibold">NewsMokey </p>
            </Link>
          </div>
          <div className="navgation ">
            <ul className="flex gap-6 items-center justify-center text-xl">
              <li className="hover:cursor-pointer hover:text-blue-900 ">
                <Link to="/" >Home</Link>
              </li>

              <li className="hover:cursor-pointer hover:text-blue-900">
                <Link to="/business">Business</Link>
              </li>
              <li className="hover:cursor-pointer hover:text-blue-900">
                <Link to="/entertainment"> Entertainment</Link>
              </li>
              <li className="hover:cursor-pointer hover:text-blue-900">
                <Link to="/health"> Health</Link>
              </li>
              <li className="hover:cursor-pointer hover:text-blue-900">
                <Link to="/science"> Science</Link>
              </li>
              <li className="hover:cursor-pointer hover:text-blue-900">
                <Link to="/sports"> Sports</Link>
              </li>
              <li className="hover:cursor-pointer hover:text-blue-900">
                <Link to="/technology"> Technology</Link>
              </li>
            </ul>
          </div>
          <div></div>
        </nav>
      </div>
    );
}

export default Navbar;