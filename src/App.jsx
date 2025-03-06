
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import DetailsPage from "./Pages/DetailsPage"
import PageNotFound from "./Pages/404"

import TV from "./Pages/TV"
import Layout from "./layout/Layout"
import Movie from "./Pages/Movie"
import People from "./Pages/People"
import Login from "./components/Authantication/Login"
import SignUp from "./components/Authantication/SignUp"

function App() {
   
  return (
    <>
   <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movie/>}/>
        <Route path="/tv" element={<TV/> }/>
        <Route path="/people" element={<People/>}/>
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Layout>
    
    </>
  )
}
export default App