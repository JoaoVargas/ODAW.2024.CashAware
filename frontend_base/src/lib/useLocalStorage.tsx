import { useState } from "react";

export function useLocalStorage<T>(keyName: string, defaultValue: T): [T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value) as T; // Parse the stored JSON value
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue)); // Save new value
    } catch (err) {
      console.error(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}
