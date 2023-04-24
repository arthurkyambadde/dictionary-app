import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        console.log("result is: ", JSON.stringify(result, null, 4));

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
