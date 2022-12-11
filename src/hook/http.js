import { useState, useCallback } from "react";
export const useHTTP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        const data = response.json();
        setLoading(false);
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );
  const clearError = () => setError(null);
  return { loading, request, error, clearError };
};
