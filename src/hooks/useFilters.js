import { useContext } from "react";
import { FiltersContext } from "../contexts/filters";
import {countries as allCountries} from '../mocks/countries.json'
import { useCallback } from "react";

export function useFilters(){
    const {filters, setFilters} = useContext(FiltersContext)

   const getCountries = useCallback((search) => {
        console.log(search)
        return allCountries.filter(country => {
            return country.name.toLowerCase().includes(search.name.toLowerCase()) && 
                (search.region.toLowerCase() === 'all' || country.region.toLowerCase() === search.region.toLowerCase())
        })
   }, [])
   


    return {filters, setFilters, getCountries}
}