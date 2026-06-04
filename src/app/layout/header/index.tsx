import "./style.scss";
import type { HeaderProps } from "./type"

export default function Header(props: HeaderProps): React.ReactElement {
  const { theme, setTheme, render, title, icon } = props.headerData;

  return (<>
    <header className={`header header--${theme}`}>
      <nav className="navigate">
        {(render === "quizzes" || render === "score" )&& (
          <div className={`subject subject--${title.toLocaleLowerCase()}`}>
            <img className="subject__icon" src={icon} alt="icon subjuct" />
            <h3 className="subject__name">{title}</h3>
          </div>
        )}
        <div className="panel">

          {theme === "light"
            ? <img className="panel__icon" src="./assets/images/icon-sun-dark.svg" alt="light theme" />
            : <img className="panel__icon" src="./assets/images/icon-sun-light.svg" alt="dark theme" />}

          <label className="toggle-theme" htmlFor="toggle-theme">
            <input
              checked={theme === "dark"}
              onChange={(e) => setTheme(e.currentTarget.checked ? "dark" : "light")}
              className="toggle-theme__checkbox"
              type="checkbox" id="toggle-theme"
              name="toggle-theme" />
            <span className="toggle-theme__slider"></span>
          </label>

          {theme === "light"
            ? <img className="panel__icon" src="./assets/images/icon-moon-dark.svg" alt="light theme" />
            : <img className="panel__icon" src="./assets/images/icon-moon-light.svg" alt="dark theme" />}
        </div>
      </nav>
    </header>
  </>);
}
