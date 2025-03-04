
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import DetailsPage from "./Pages/DetailsPage"
import PageNotFound from "./Pages/404"
import Movies from "./Pages/movies"
import TV from "./Pages/TV"
import PeopleList from "./Pages/PeopleLIst"
import Layout from "./layout/Layout"

function App() {
   
  return (
    <>
   <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies/> }/>
        <Route path="/tv" element={<TV/> }/>
        <Route path="/people" element={<PeopleList/>}/>
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Layout>
    
    </>
  )
}
export default App