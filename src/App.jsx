
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import DetailsPage from "./Pages/DetailsPage"
import PageNotFound from "./Pages/404"

function App() {
   
  return (
    <>

    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    
    </>
  )
}
export default App