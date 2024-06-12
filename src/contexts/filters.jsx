import { useState } from "react";
import { createContext } from "react";


export const FiltersContext = createContext()

export function FiltersProvider ({children}){
    const [filters, setFilters]  = useState({
        "name": "",
        "region": "all"
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}