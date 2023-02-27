import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";
import StoringSignup from "./components/StoringSignup";
import Input from "./components/Input";
// import ProjectDemo from "./components/ProjectDemo";

const App = () => {
  // return <ProjectDemo />;
  const { data } = useFetch();
  return (
    <div>
      <Header />
      <BrowserRouter>add 
        <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Input />} />
          <Route path="/StoringSignup" element={<StoringSignup />} />
        </Routes>
      </BrowserRouter>
      <Body data={data} />
      <Footer />
    </div>
  );
};

export default App;
