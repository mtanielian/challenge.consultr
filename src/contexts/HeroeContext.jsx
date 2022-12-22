import { createContext, useState } from "react";
export const HeroContext = createContext();

export const HeroContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [heroe, setHeroe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <HeroContext.Provider value={{ 
        heroes, setHeroes,
        heroe, setHeroe,
        loading, setLoading,
        error, setError
    }}>
      {children}
    </HeroContext.Provider>
  );
}


