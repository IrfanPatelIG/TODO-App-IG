import React from "react";

function NavBar() {
  return (
    <nav className="w-full h-13 flex justify-between items-center px-8 bg-gray-950 text-white">
      <div className="nav-heading text-4xl font-medium underline-offset-4 decoration-1 underline decoration-bg-second">Just Do it.</div>
      <div className="nav-links flex gap-4 **:font-medium">
        <ul className="flex gap-1 items-center text-[18px] *:px-3 *:py-2 *:hover:bg-gray-900">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Product</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <button className="prime-btn rounded-md">Log Out</button>
      </div>
    </nav>
  );
}

export default NavBar;