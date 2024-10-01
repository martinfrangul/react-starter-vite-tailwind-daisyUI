import { TramosContext } from "../context/TramosContext";
import { useContext } from "react";

const TramosView = () => {
  const context = useContext(TramosContext);
  const { tramos } = context;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {tramos.map((tramo) => (
        <div
          key={tramo.name}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h1 className="text-xl font-bold text-gray-800 mb-2">Tramo: {tramo.name}</h1>
          <p className="text-gray-600">
            <span className="font-semibold">Longitud equivalente:</span> {tramo.longEquivalente} m
          </p>
        </div>
      ))}
    </div>
  );
};

export default TramosView;
