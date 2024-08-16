import bbc from "../assets/bbc2.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={bbc}
              alt=""
              width="80px"
              height="30"
              className="d-inline-block align-text-top mx-5 "
            />
            NewsApp
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
