import { useState } from "react";

// Custom hook for enabling toggle

const useToggle = () => {
  const [state, changeState] = useState(false); // initial state
  const Toggle = () => {
    changeState(!state);
  };
  return [state, Toggle];
};
