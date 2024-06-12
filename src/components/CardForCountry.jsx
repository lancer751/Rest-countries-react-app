

export default function CardForCountry({id, src, tagImage, countryName, population, region, capital}){

    return(

        <a href={`/country/${id}`} className="bg-white h-full dark:bg-Dark-Blue max-w-sm grid grid-flow-row rounded-md overflow-hidden hover:scale-105 transition-transform animate-fade-in shadow-md">
            <img src={src} alt={tagImage} className="object-cover object-center w-full h-48"/>
            <div className="text-Very-Dark-Blue-ML dark:text-white px-5 py-5">
                <h6 className="text-lg mb-5 font-bold">{countryName}</h6>

                <div className="space-y-3">
                    <p className="font-semibold text-base">Population: <span className="text-Dark-Gray">{population}</span></p>
                    <p className="font-semibold text-base">Region: <span className="text-Dark-Gray">{region}</span></p>
                    <p className="font-semibold text-base">Capital: <span className="text-Dark-Gray">{capital}</span></p>
                </div>
            
            </div>
        </a>

    )
}