import { CiSearch } from "react-icons/ci";

function SearchBox() {
  return (
    <section className=" mt-4 text-slate-300 ">
        <div className="relative ">
            <input type="text" 
              placeholder='Search for a movie,TV Show or celebrity that you are looking for' 
              className="w-full bg-slate-600 text-xs md:text-2xl p-3  border-slate-900 border-4 rounded-md outline-none placeholder:text-slate-400" />
            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 md:w-8 md:h-8 bg-slate-600"/>
        </div>
    </section>
  )
}

export default SearchBox