const Header = (props) => {
  return (
    <header className="header__bar">
      <p className="header__bar--userName">{props.userData}</p>
    </header>
  );
};

export default Header;
