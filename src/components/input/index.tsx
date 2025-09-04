"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSeacrh(e: React.FormEvent) {
    e.preventDefault();

    if (input.trim() === "") return;

    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSeacrh}
      className="w-full bg-slate-200 flex my-5 rounded-lg p-2 items-center justify-between"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procurando algum jogo?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="cursor-pointer">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
