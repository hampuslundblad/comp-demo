import { useCallback } from "react";

function useLocalStorage() {
  const setItem = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
  }, []);

  const getItem = useCallback((key: string) => {
    return localStorage.getItem(key);
  }, []);

  return { setItem, getItem };
}

export default useLocalStorage;
