import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/landingPage/page'
import { SignUp } from './pages/signup/signup'
import { SignIn } from './pages/signin/signin'
import { Dashboard } from './pages/dashboard/dashboard'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LandingPage/>} ></Route>
          <Route path = "/signup" element = {<SignUp/>}></Route>
          <Route path = "/signin" element = {<SignIn/>}></Route>
          <Route path = "/dashboard" element = {<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
