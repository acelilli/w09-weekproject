import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";

function App() {
  return (
    <div className="App">
      {/* NetflixNavbar */}
      <NetflixNavbar />
      {/* NetflixMain */}
      {/* Netflix Footer */}
      <NetflixFooter />
    </div>
  );
}

export default App;
