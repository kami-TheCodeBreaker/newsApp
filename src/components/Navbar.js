import { NewspaperIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="h-16 flex max-w-full px-5 bg-white-200 text-black  font-baloo shadow-xl ">
        <nav className="flex items-center justify-between w-full gap-9 ">
          <div className="icon">
            <Link to="/" className="flex flex-col justify-center ">
              <NewspaperIcon className="fill-white stroke-black h-10" />
              <p className="text-black text-md  font-semibold">NewsMokey </p>
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
}
