import { useEffect, useState } from "react";

function Header({ setUser }) {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState(false);
  const findUser = () => {
    setUser(value);
    setValue("");
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("light__mode");
    } else {
      document.body.classList.remove("light__mode");
    }
  }, [theme]);

  return (
    <header>
      <div className="header__container">
        <h1>
          FITB<span>Finder</span>
        </h1>
        <div className="header__main">
          <div className="header__search">
            <i className="ri-search-line"></i>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              id="search"
              type="text"
              placeholder="type your profile"
            />
            <button onClick={findUser}>Search</button>
          </div>
          <button onClick={() => setTheme(!theme)} className="night__mode">
            <i className="ri-sun-line"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
