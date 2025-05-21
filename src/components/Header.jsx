import logo from "../assets/images/logo.svg";

const Header = () => (
  <header>
    <div className="flex items-center justify-center py-16">
      <h1 className="sr-only">Tip Calculator</h1>
      <img src={logo} alt="logo image" />
    </div>
  </header>
);

export default Header;