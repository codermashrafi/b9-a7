import profile from "../../assets/Frame-5.png";

const Header = () => {
  return (
    <div className="">
      <header className="container mx-auto pt-6">
        <nav>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="  text-4xl font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base font-normal">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={profile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="bg-[url('https://i.ibb.co/K0bQZs0/431714868-1568847610632210-8724042498863650745-n.jpg')] bg-cover text-center py-[130px] rounded-3xl mt-12">
          <h1 className="text-5xl font-bold text-white leading-[76px]">
            Discover an exceptional cooking <br></br> class tailored for you!
          </h1>
          <p className="text-lg font-normal text-white pb-8">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br></br> problems to become an
            exceptionally well world-class Programmer.
          </p>
          <button className="btn btn-outline rounded-full mr-5 px-7 text-black font-semibold bg-[#0be58a] border-1 border-white">
            Explore Now
          </button>
          <button className="btn btn-outline rounded-full px-7 text-white font-semibold bg-transparent border-1 border-white">
            Our Feedback
          </button>
        </div>
      </header>

      <div className="text-center mx-auto mt-[100px] mb-[30px]">
        <h2 className="text-5xl font-bold text-black leading-[76px]">
          Our Recipes
        </h2>
        <p className="text-lg font-normal text-[#736d80] pb-8">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget <br></br> urna volutpat
          curabitur elementum mauris aenean neque.{" "}
        </p>
      </div>
    </div>
  );
};
export default Header;
