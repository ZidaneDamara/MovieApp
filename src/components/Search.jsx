import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex text-slate-700">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a movie..."
        className="p-2 rounded-l border"
      />
      <button
        type="submit"
        className="bg-secondaryColor text-white px-4 py-2 rounded-r hover:bg-thirdColor"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
