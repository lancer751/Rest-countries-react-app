import { useFilters } from "../hooks/useFilters.js"
import { IconSearch } from "./Icons"


export function Filters(){
    const {setFilters} = useFilters()

    const handleChangeInput = (e) => {
        setFilters(prevState => ({
            ...prevState,
            name: e.target.value
        }))
    }

    const handleChangeRegion = (e) => {
        setFilters(prevState => ({
            ...prevState,
            region: e.target.value
        }))
    }

    return(
        <div className="pt-7 sm:pt-10 flex flex-col sm:flex-row justify-between gap-y-10 gap-x-9">
            <div className="w-full md:max-w-md flex items-center bg-white dark:bg-Dark-Blue rounded-md shadow-md px-4 py-3">
                <IconSearch className="text-Very-Dark-Blue-ML dark:text-white"/>
                <input type="text" placeholder="Search for a Country" className="w-full bg-transparent text-Dark-Gray dark:text-white focus:outline-none dark:placeholder:text-white px-3" id="searching" onChange={handleChangeInput}/>
            </div>

            <select className="min-w-max max-w-[180px] text-Very-Dark-Blue-ML dark:text-white bg-white dark:bg-Dark-Blue py-3 px-4 rounded-md shadow-md" onChange={handleChangeRegion}>
                <option value='all'>Filter By Region</option>
                <option value='africa'>Africa</option>
                <option value='americas'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
            
        </div>
    )
}