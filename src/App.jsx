import "./App.css";
import LongEqui from "./components/LongEqui";
import TramosForm from "./components/TramosForm";
import { TramosProvider } from "./context/TramosContext";
import TramosView from "./components/TramosView";

function App() {
  return (
    <TramosProvider>
      <div className="w-full flex flex-col justify-center items-start">
        <div className="flex flex-row">
          <LongEqui></LongEqui>
          <TramosForm></TramosForm>
        </div>
        <TramosView></TramosView>
      </div>
    </TramosProvider>
  );
}

export default App;
