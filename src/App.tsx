import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherAPI from "./components/WeatherAPI";
import UserLocation from "./components/UserLocation";
import ForecastAPI from "./components/ForecastAPI";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />

      <UserLocation />
    </div>
  );
}

export default App;
