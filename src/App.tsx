import React from "react";

import { ButtonStateContextProvider } from "./context/ButtonState";
import Button from "./components/Button";

function App() {
  return (
    <>
      <ButtonStateContextProvider>
        <main className="container">
          <h1>Mastering Context</h1>
          <Button />
        </main>
      </ButtonStateContextProvider>
    </>
  );
}

export default App;
