import React from 'react';
function Contact() {
   return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <form className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full border border-gray-300 rounded px-4 py-2"
          rows="4"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;