import React, { createContext, useContext, useState } from "react";

interface IButtonStateContext {
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonStateContext = createContext({} as IButtonStateContext);

const ButtonStateContextProvider: React.FC = ({ children }) => {
  const [buttonState, setButtonState] = useState<boolean>(false);

  return (
    <ButtonStateContext.Provider value={{ buttonState, setButtonState }}>
      {children}
    </ButtonStateContext.Provider>
  );
};

const useButtonState = (): IButtonStateContext => {
  const context = useContext(ButtonStateContext);

  if (!context) {
    throw new Error(
      "useHamburgerState must be used within a ButtonStateContextProvider"
    );
  }

  const { buttonState, setButtonState } = context;

  return { buttonState, setButtonState };
};

export { ButtonStateContextProvider, useButtonState };
