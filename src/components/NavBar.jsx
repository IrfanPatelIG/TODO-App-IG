function NavBar() {
  return (
    <nav className="
      w-full h-13 flex justify-between items-center px-8
      bg-bg-primary-2-dark text-white
    ">
      <div className="
        nav-heading text-4xl font-medium
        underline underline-offset-4
        decoration-bg-secondary
      ">
        Just Do it.
      </div>

      <div className="nav-links flex gap-4 items-center">
        <ul className="
          flex items-center text-[18px]
          *:px-3 *:py-2
          *:rounded-md
          *:hover:bg-accent-ink
          *:transition-colors
        ">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="prime-btn px-4 py-2 rounded-md">
          Log Out
        </button>
      </div>
    </nav>

  );
}

export default NavBar;