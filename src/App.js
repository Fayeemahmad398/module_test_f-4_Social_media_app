import { useState } from "react";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import DetailsPage from "./Components/DetailsPage";
import { useSelector } from "react-redux";
import "./Components/style.css";

const App = () => {
  const obj = useSelector((state) => {
    return state.reducerToSelectedPost;
  });
  console.log(obj);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/item/:${obj.id}`} element={<DetailsPage />} />
      </Routes>
    </div>
  );
};
export default App;
