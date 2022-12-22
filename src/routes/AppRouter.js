import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import HereoDetailsPage from "../pages/HereoDetailsPage"
import HomePage from "../pages/HomePage"
// import ProductDeatilsPage from "../pages/ProductDeatilsPage"




const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/heroe/:id" element={<MainLayout><HereoDetailsPage /></MainLayout>} />
        {/*<Route path="/favs" element={<MainLayout><HeroesFavs /></MainLayout>} />*/}
        <Route path="/*" element={<MainLayout><HomePage /></MainLayout>} />
      </Routes>
    </BrowserRouter>

    )
}

export default AppRouter
