import { Outlet } from "react-router-dom"
import Mainlayout from "./Layouts/Mainlayout"
import Footer from "./Page/Footer"


function App() {
// const {pathname} =useLocation();
  return (
<div className="mx-auto max-w-[1200px]">



<Mainlayout>
  <Outlet></Outlet>
  <Footer></Footer>
 </Mainlayout>
</div>
  )
}

export default App
