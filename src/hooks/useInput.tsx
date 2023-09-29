import { useState, ChangeEvent } from "react";

// Define a custom hook for managing an input field
export function useInput(initialValue: string = "") {
  const [value, setValue] = useState<string>(initialValue);

  // Function to handle input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    
  };

  return {
    value,
    onChange: handleChange,
  };
}
