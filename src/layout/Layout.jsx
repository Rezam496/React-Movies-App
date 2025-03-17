import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Layout({children}) { 
  return (
    <div className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white ">
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}
export default Layout