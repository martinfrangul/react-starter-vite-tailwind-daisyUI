import "./App.css";
import LongEqui from "./components/LongEqui";
import TramosForm from "./components/TramosForm";
import { TramosProvider } from "./context/TramosContext";

function App() {
  return (
    <TramosProvider>
      <div className="w-full flex flex-row justify-center items-start h-screen">
        <LongEqui></LongEqui>
        <TramosForm></TramosForm>
      </div>
    </TramosProvider>
  );
}

export default App;
