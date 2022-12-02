import { useEffect, useState } from "react";

export const useAddList = (bool, elem) => {
  const [value, setValue] = useState(bool);

  const add = () => {
    setValue(!value);
  };

  const clouseList = (e) => {
    if (!e.target.closest(elem)) {
      setValue(false);
    }
  };
  const clouseScroll = (e) => {
    setValue(false);
  };
  useEffect(() => {
    window.addEventListener("click", clouseList);
    window.addEventListener("scroll", clouseScroll);
    return () => {
      window.removeEventListener("click", clouseList);
      window.removeEventListener("scroll", clouseScroll);
    };
  });
  return [value, add];
};
