// import "./App.css";
import AppBody from "./components/AppBody";
import Headers from "./components/Headers";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  const [state, setState] = useContext(AppContext)


  return (
    <div
      className={
        (state?.selctedCityInfo?.main?.temp > Number(19 + 273.15))
          ? "app warm"
          : "app"
      }
    >
      <main>
        <Headers />
        <AppBody />
      </main>
    </div>
  );
}

export default App;
