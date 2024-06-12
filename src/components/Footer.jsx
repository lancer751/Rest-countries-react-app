import { useFilters } from "../hooks/useFilters"


export function Footer(){
    const {filters} = useFilters()

    return(
        <p className="bg-black/70 text-xl text-white fixed left-5 bottom-5 p-2 rounded-xl">
            {
                JSON.stringify(filters, 2, null)
            }
        </p>
    )
}