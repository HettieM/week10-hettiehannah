import React from "react";
import getUser from "../utils/getUser";
import Poster from "./poster";

const Header = () => {
  const [username, setUsername] = React.useState("");
  const [userData, setUserData] = React.useState({});

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      getUser(username).then((res) => {
        setUserData(res);
      });
    }
  };

  const { avatar_url, name } = userData;
  return (
    <div>
      <header className="header-wrapper">
        <h1 className="header-heading">Crimes Against The Cohort</h1>
        <form className="header-form" onSubmit={handleSubmit}>
          <label className="header-form__label" htmlFor="username">
            Please enter GitHub username:
          </label>
          <select
            onChange={handleUsername}
            id="names"
            className="header-form__input"
          >
            <option value="">Please Select</option>
            <option value="akomiqaia">Ako</option>
            <option value="CampbellDocherty">Cammy</option>
            <option value="Chloeh24">Chloe</option>
            <option value="sofer">Dan</option>
            <option value="glrta">Gio</option>
            <option value="Albadylic">Gregor</option>
            <option value="hannahgooding">Hannah</option>
            <option value="HettieM">Hettie</option>
            <option value="Ivo-Evans">Ivo</option>
            <option value="itsina96">Ina</option>
            <option value="jackherizsmith">Jack</option>
            <option value="jamesj-0">James</option>
            <option value="Joepock123">Joe</option>
            <option value="Alexreid95">Kat</option>
            <option value="Lizzy-j">Lizzy</option>
            <option value="oliverjam">Oli</option>
            <option value="Roger-Heathcote">Roger</option>
            <option value="tacotoemeck">Tom</option>
            <option value="VatsKan">Vatsal</option>
            <option value="yvonne-liu">Yvonne</option>
          </select>
          <button className="header-form__submit-btn" type="submit">
            Submit
          </button>
        </form>
      </header>
      <main className="poster-wrapper">
        {Object.keys(userData).length ? (
          <Poster avatar_url={avatar_url} name={name} />
        ) : null}
      </main>
    </div>
  );
};

export default Header;
