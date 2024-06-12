// import { DarkModeSwitcher } from "./Icons";


export function NavBar(){

    return (
        <nav className="bg-white dark:bg-Dark-Blue px-4 py-6 lg:px-14 shadow-md">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <h3 className="text-Very-Dark-Blue-ML dark:text-white text-normal sm:text-lg md:text-xl font-extrabold">
                  Where in the world?
              </h3>
              {/* <div className="flex gap-2 items-center justify-center">
                <DarkModeSwitcher className= "cursor-pointer w-4 h-4 sm:w-5 sm:h-5 dark:fill-white dark:text-white"/>
                <span className="font-semibold text-sm sm:text-lg dark:text-white">Dark Mode</span>
              </div> */}
          </div>
      </nav>
    )
}