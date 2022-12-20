import { useState, useCallback } from "react";
export const useHTTP = () => {
  const [error, setError] = useState(null);
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {},
      credentials = "include",
      redirect = "follow"
    ) => {
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          credentials,
          redirect,
        });
        const data = response.json();
        return data;
      } catch (error) {
        setError(error.message);
        throw error;
      }
    },
    []
  );
  const clearError = () => setError(null);
  return { request, error, clearError };
};
