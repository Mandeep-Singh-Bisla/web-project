import { useState } from "react";
import Alert from "./Alert";

const Button = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      {visibility && <Alert onClose={() => setVisibility(false)}>Alert</Alert>}
      <button type="button" onClick={() => setVisibility(true)}>
        Show
      </button>
    </>
  );
};

export default Button;
