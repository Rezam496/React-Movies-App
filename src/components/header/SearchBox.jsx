import { CiSearch } from "react-icons/ci";

function SearchBox() {
  return (
    <section className="container mt-12 text-slate-300">
        <div className="relative">
            <input type="text" 
              placeholder='Search for a movie,TV Show or celebrity that you are looking for' 
              className="w-full bg-slate-600 text-xl p-3  border-slate-900 border-4 rounded-md outline-none placeholder:text-slate-400" />
            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10"/>
        </div>
    </section>
  )
}

export default SearchBox