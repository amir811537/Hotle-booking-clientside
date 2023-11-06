import { Outlet } from "react-router-dom"
import Mainlayout from "./Layouts/Mainlayout"
import Footer from "./Page/Footer"


function App() {

  return (
 <Mainlayout>


  <Outlet></Outlet>
  <Footer></Footer>
 </Mainlayout>
  )
}

export default App
