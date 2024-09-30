import Select from "react-select";
import diametrosAcc from "../data/diametrosAcc.json";
import { useState, useContext, useRef } from "react";
import { TramosContext } from "../context/TramosContext";

const LongEqui = () => {
  const [accesorio, setAccesorio] = useState("");
  const [diametro, setDiametro] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [accLongEquis, setAccLongEquis] = useState([]);

  const modalRef = useRef(null);

  const context = useContext(TramosContext);
  const { setLongEquivalente } = context;

  const onGetLongEquivalente = () => {
    const finalLongEquivalente = accLongEquis.reduce((acc, current) => {
      return acc + current;
    }, 0);

    setLongEquivalente(finalLongEquivalente)
    modalRef.current.close()
  };

  const accesoriosOptions = Object.keys(diametrosAcc.coefD).map((key) => ({
    value: key,
    label: key,
  }));

  const onAddTramoDetail = () => {
    // Verificación de errores
    if (!accesorio || !diametro || !quantity) {
      alert("Por favor, selecciona todos los campos.");
      return;
    }

    // Extraer el valor numérico del accesorio
    const diametroAccEsp = diametrosAcc.coefD[accesorio.value];
    const quantityNumber = parseFloat(quantity);
    const newAccLongEqui = diametro.value * quantityNumber * diametroAccEsp;

    setAccLongEquis((prev) => [...prev, newAccLongEqui]);

    // Limpiar los campos
    setAccesorio("");
    setDiametro(null);
    setQuantity("");
  };

  console.log(accLongEquis);

  const diametrosOptions = [
    { value: 9.5, label: "9,5" },
    { value: 13, label: "13" },
    { value: 19, label: "19" },
    { value: 25, label: "25" },
    { value: 32, label: "32" },
    { value: 38, label: "38" },
    { value: 51, label: "51" },
    { value: 63, label: "63" },
    { value: 76, label: "76" },
    { value: 101, label: "101" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <dialog
        ref={modalRef}
        id="edit-modal"
        className="modal bg-white rounded-lg shadow-xl p-8"
      >
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-gray-800 mb-4">Tramos</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-600 mb-2">Accesorio</label>
              <Select
                options={accesoriosOptions}
                onChange={(selectedOption) => setAccesorio(selectedOption)}
                className="border border-gray-300 rounded"
                value={accesorio}
              />
            </div>
            <span className="flex flex-row items-center justify-end text-gray-600">
              Coef. : <span className="font-bold ml-2">{diametrosAcc.coefD[accesorio?.value]}</span>
            </span>
            <div>
              <label className="text-gray-600 mb-2">Diámetro (m)</label>
              <Select
                className="w-full border border-gray-300 rounded"
                options={diametrosOptions}
                onChange={(selectedOption) => setDiametro(selectedOption)}
                value={diametro}
              />
            </div>
            <div>
              <label htmlFor="cantidad" className="text-gray-600 mb-2">
                Cantidad
              </label>
              <input
                className="w-1/4 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400"
                id="cantidad"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddTramoDetail()}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all"
          >
            Agregar
          </button>
          <div className="modal-action flex justify-end gap-4 mt-6">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-all"
              onClick={() => modalRef.current.close()}
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => onGetLongEquivalente()}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all"
            >
              Aceptar
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LongEqui;
