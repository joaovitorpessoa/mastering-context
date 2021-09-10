import React from "react";

import { useButtonState } from "../context/ButtonState";

const Button: React.FC = () => {
  const { buttonState, setButtonState } = useButtonState();

  return (
    <section className="button-wrapper">
      <button
        onClick={() => setButtonState((buttonState) => !buttonState)}
        style={{ background: buttonState ? "green" : "red" }}
      />
    </section>
  );
};

export default Button;
