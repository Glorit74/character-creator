import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="bar"
        style={{
          position: "fixed",
          bottom: "0px",
          width: "100%",
          height: "280px",
          backgroundColor: "hsl(195deg, 20%, 86%)",
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
