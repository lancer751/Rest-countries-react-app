import { Countries } from "./components/Countries"
import { Filters } from "./components/Filters"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/Navbar"
import { FiltersProvider } from "./contexts/filters"

function App() {

  return (
    <>
      <FiltersProvider>
        <NavBar/>
        <main className="text-Very-Dark-Blue dark:text-white px-4 lg:px-14 max-w-screen-xl mx-auto">
            <Filters/>
            <Countries/>
        </main>
        <Footer/>
      </FiltersProvider>
    </>
  )
}

export default App
