import React from "react";
import Search from "./Search";

const Header = ({ title, handleSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-10 shadow-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default Header;
