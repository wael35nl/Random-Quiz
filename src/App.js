import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";
import css from "./index.css";
// import StoringSignup from "./components/StoringSignup";

// import ProjectDemo from "./components/ProjectDemo";

const App = () => {
  // return <ProjectDemo />;
  const { data } = useFetch();
  if (data.length === 0) {
    return <h1 className={css.loading}>Loading...</h1>;
  }
  return (
    <div className={css.mainContent}>
      <Header />
      <Navbar />
      <Body data={data} />
      <Footer />
      {/* <StoringSignup /> */}
    </div>
  );
};

export default App;
