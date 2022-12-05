import { useEffect, useState } from "react";

export const useAddList = (bool, elem) => {
  window.addEventListener("DOMFocusIn", (event) => {
    console.log("Resized");
  });
  const [value, setValue] = useState(bool);

  const add = () => {
    setValue(!value);
  };

  const clouseList = (e) => {
    if (!e.target.closest(elem)) {
      setValue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", clouseList);
    return () => {
      window.removeEventListener("click", clouseList);
    };
  });
  return [value, add];
};
