import Navigation from './Navigation'
import SearchBox from './SearchBox'
import FollowUs from './FollowUs'
import { useLocation } from 'react-router-dom';
function Header() {
  const location=useLocation();
  return (
    <header className="  bg-white dark:bg-slate-900 text-black dark:text-white p-4">
      <div className="fixed top-0 left-0 right-0 z-20 ">
      <Navigation/>
      </div>
      {location.pathname==="/"&&
        <div className="container md:py-6 mt-20  opacity-85 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4">
        <SearchBox/>
        <FollowUs/>
      </div>
      }
      
    </header>
  )
}

export default Header