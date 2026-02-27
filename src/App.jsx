import React from "react";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
const App = () => {
  return (
    <div>
      <Navbar />
      <Image />
      <Pagination />
    </div>
  );
};

export default App;
