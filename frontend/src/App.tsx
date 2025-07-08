import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/landingPage/page'
import { SignUp } from './pages/signup/signup'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LandingPage/>} ></Route>
          <Route path = "/signup" element = {<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
