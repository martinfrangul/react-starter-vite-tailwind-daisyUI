import { useState, useContext, useEffect } from "react";
import { TramosContext } from "../context/TramosContext";

const TramosForm = () => {
  const context = useContext(TramosContext);

  const { tramos, setTramos, longEquivalente } = context;

  const [tramo, setTramo] = useState({});
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");
  const [longTramo, setLongTramo] = useState("");
  const [longCalculo, setLongCalculo] = useState("");

  useEffect(() => {
    setTramo({
      name: name,
      kcal: parseInt(kcal),
      longTramo: parseInt(longTramo),
      longCalculo: parseInt(longCalculo),
    });
  }, [name, kcal, longTramo, longCalculo]);

  const onSubmitTramo = (event) => {
    event.preventDefault();

    setTramos((prev) => [...prev, tramo]);

    setName("");
    setKcal("");
    setLongTramo("");
    setLongCalculo("");
    setTramo({});
  };

  console.log(tramos);

  return (
    <form
      className="flex flex-col w-full bg-gray-100 p-6 rounded-lg shadow-lg"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-row w-full mb-6">
        <div className="flex flex-col gap-4 w-1/2 border-r border-gray-300 pr-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-2">Tramo</label>
            <input
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-2">Kcal/h</label>
            <input
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              type="number"
              onChange={(event) => setKcal(event.target.value)}
              value={kcal}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-2">L.tramo</label>
            <input
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              type="number"
              onChange={(event) => setLongTramo(event.target.value)}
              value={longTramo}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-2">Long. cálculo (m)</label>
            <input
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              type="number"
              onChange={(event) => setLongCalculo(event.target.value)}
              value={longCalculo}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2 pl-4">
          <div className="flex flex-col">
            <h3 className="text-gray-600 text-sm">Caudal</h3>
            <h3 className="text-lg font-semibold text-gray-800">860,2150538</h3>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col">
              <h3 className="text-gray-600 text-sm">Longitud eq</h3>
              <h3 className="text-lg font-semibold text-gray-800">
                {longEquivalente}
              </h3>
            </div>
            <button
              className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all"
              onClick={() => document.getElementById("edit-modal").showModal()}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-600 text-sm">Longitud tramo</h3>
            <h3 className="text-lg font-semibold text-gray-800">20,758</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-600 text-sm">Diámetro</h3>
            <h3 className="text-lg font-semibold text-gray-800">1/2</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all"
          onClick={onSubmitTramo}
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default TramosForm;
