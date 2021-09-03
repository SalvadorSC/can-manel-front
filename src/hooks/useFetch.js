import { useCallback, useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchGlobal = useCallback(async (url, opciones = {}) => {
    setLoading(true);
    setError(false);
    const resp = await fetch(url, opciones);
    setLoading(false);
    if (!resp.ok) {
      setError(true);
      return false;
    }
    return await resp.json();
  }, []);

  return {
    error,
    fetchGlobal,
    loading,
  };
};
