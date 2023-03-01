import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";

// import ProjectDemo from "./components/ProjectDemo";

import "./index.css";

const App = () => {
  // return <ProjectDemo />;
  const { data, error, isLoading } = useFetch();

  let contentElement;

  if (data.length > 0) {
    contentElement = <div>
      <Header />
      <Navbar />
      <Body data={data} />
      <Footer />
    </div>
  }

  if (isLoading) {
    contentElement = <section className='loading'>
      <h1>Loading the Quiz...</h1>
    </section>
  }

  if (error) {
    contentElement = <section className='loading'>
      <h1>{error}</h1>
    </section>
  }

  return (<>
    {contentElement}
  </>);
};

export default App;
