import '../styles/Title.css';
import logo from '../ressources/logo.svg';

function Title() {
    return (
    <div className="Title">
      <h1 className="Title">MORIN </h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>

    );
  }
  export default Title;