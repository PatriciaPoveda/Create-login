const Header = (props) => {
  return (
    <header className="header__bar">
      <p className="header__bar--userName">{props.userName}</p>
    </header>
  );
};

export default Header;
