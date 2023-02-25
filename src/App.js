import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

import useFetch from "./hooks/useFetch";

// import ProjectDemo from "./components/ProjectDemo";

const App = () => {
  // return <ProjectDemo />;
  const { data } = useFetch();
  return (<>
    <Header />
    <Navbar />
    <Body data={data} />
    <Footer />
  </>);
};

export default App;