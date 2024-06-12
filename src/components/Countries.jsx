import CardForCountry from "./CardForCountry"
import { useFilters } from "../hooks/useFilters"

export function Countries(){
    const {filters, getCountries} = useFilters()

    const filteredCountries = getCountries(filters)


    return(
        <section className="py-10 grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-14 gap-x-8" id="resultsContainer">

            {
                filteredCountries.slice(0, 10).length === 0 ? (
                    <p className="col-span-full text-center">No hay resultados disponibles</p>
                ) : (
                    filteredCountries.map(country => (
                        <CardForCountry
                            key={country.numericCode}
                            id  = {country.numericCode}
                            src = {country.flags.png}
                            tagImage= {country.name}
                            countryName= {country.name}
                            population={country.population}
                            region= {country.region}
                            capital={country.capital}
                        />
                    ))
                )

            }

            </section>
    )
}