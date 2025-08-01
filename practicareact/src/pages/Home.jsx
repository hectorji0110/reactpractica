import { useState } from 'react';
import React from 'react';

function Home() {
  const [data, setData] = useState(null);

  const fetchApi = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      if (!res.ok) throw new Error('Error en la API');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error.message);
      setData(null);
    }
  };


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <button
        onClick={fetchApi}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Llamar API
      </button>

      {data && (
        <div className="mt-6 bg-white p-4 rounded shadow text-center">
          <p className="text-lg font-semibold capitalize">{data.name}</p>
          <img src={data.sprites.front_default} alt={data.name} className="mx-auto mt-2" />
        </div>
      )}
    </div>
  );
}

export default Home;