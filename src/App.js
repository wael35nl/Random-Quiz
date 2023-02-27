import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

// import StoringSignup from "./components/StoringSignup";
// import ProjectDemo from "./components/ProjectDemo";

import css from "./index.css";

const App = () => {
  // return <ProjectDemo />;
  const { data, error, isLoading } = useFetch()
  if (isLoading) {
    return (
    <section className={css.loadingDiv}>
    <h1 className={css.loading}>Loading...</h1>
    </section>
    )
  } else if (error) {
    return (
      <section className={css.loadingDiv}>
        <h1 className={css.loading}>{error.message}</h1>
      </section>
      )
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
