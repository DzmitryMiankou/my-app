import { useCallback } from "react";

export const useHttp = () => {
  let arr = [];
  useCallback(
    async function http(params) {
      try {
        await fetch("http://localhost:5000", {
          method: "get",
        })
          .then((response) => response.json())
          .then((result) => arr.push(result));
      } catch (error) {
        console.log(error);
      }
    },
    [arr]
  );

  return [arr];
};
