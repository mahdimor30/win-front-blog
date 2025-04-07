
export const generateProfileName = (value: string): string => {
    return value
      .split(" ")
      .map((part) => {
      
        return  part?.charAt(0).toLocaleUpperCase();
        
      })
      .join(" ");
  };
  