import { useState, useContext, useEffect } from "react";
import { TramosContext } from "../context/TramosContext";

const TramosForm = () => {
  const context = useContext(TramosContext);

  const {tramos, setTramos} = context;

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
      className="flex flex-col w-full"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-3 w-full justify-start items-start border-r-[1px] h-full border-solid border-black">
          <div className="flex flex-col mx-1">
            <label className="text-sm my-1">Tramo</label>
            <input
              className="px-1 border-[1px] border-solid border-black rounded w-20"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>

          <div className="flex flex-col mx-1">
            <label className="text-sm my-1">Kcal/h</label>
            <input
              className="px-1 border-[1px] border-solid border-black rounded w-20"
              type="number"
              onChange={(event) => setKcal(event.target.value)}
              value={kcal}
            />
          </div>

          <div className="flex flex-col mx-1">
            <label className="text-sm my-1">L.tramo</label>
            <input
              className="px-1 border-[1px] border-solid border-black rounded w-20"
              type="number"
              onChange={(event) => setLongTramo(event.target.value)}
              value={longTramo}
            />
          </div>

          <div className="flex flex-col mx-1">
            <label className="text-sm my-1">Long. cálculo (m)</label>
            <input
              className="px-1 border-[1px] border-solid border-black rounded w-20"
              type="number"
              onChange={(event) => setLongCalculo(event.target.value)}
              value={longCalculo}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full justify-evenly items-start m-2">
          <div className="flex flex-col">
            <h3 className="text-xs">Caudal</h3>
            <h3>860,2150538</h3>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col">
              <h3 className="text-xs">Longitud eq</h3>
              <h3>10,758</h3>
            </div>
            <button
              className="btn btn-sm"
              onClick={() => document.getElementById("edit-modal").showModal()}
            >
              edit
            </button>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs">Longitud tramo</h3>
            <h3>20,758</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs">Diámetro</h3>
            <h3>1/2</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm px-8 mt-3" onClick={onSubmitTramo}>
          Agregar
        </button>
      </div>
    </form>
  );
};

export default TramosForm;
