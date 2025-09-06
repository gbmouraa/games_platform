"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);

    if (input.trim() !== "") {
      setGameName(input);
    }

    setInput("");
  }

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-white w-full rounded-md h-8 text-black px-2"
          />
          <button onClick={handleButton} className="cursor-pointer">
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all cursor-pointer"
          onClick={handleButton}
        >
          <FiEdit size={24} color="#fff" />
        </button>
      )}

      {gameName !== "" && (
        <div>
          <span className="text-white">Jogo favorito:</span>
          <p className="font-bold text-white">{gameName}</p>
        </div>
      )}
      {!gameName && <p className="font-bold text-white">Adicionar Jogo</p>}
    </div>
  );
}
