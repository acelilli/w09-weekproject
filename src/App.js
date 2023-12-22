import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixMain from "./components/NetflixMain";

function App() {
  return (
    <div className="App">
      <NetflixNavbar />
      <NetflixMain></NetflixMain>
      <NetflixFooter />
    </div>
  );
}

export default App;
