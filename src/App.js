import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFetch from './hooks/useFetch';
// import StoringSignup from "./components/StoringSignup";

// import ProjectDemo from "./components/ProjectDemo";

const App = () => {
  // return <ProjectDemo />;
  const { data } = useFetch();
  return (<div>
    <Header />
    <Navbar />
    <Body data={data} />
    <Footer />
    {/* <StoringSignup /> */}
  </div>);
};

export default App;