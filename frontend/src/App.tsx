import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Starting } from './components/Starting'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Starting/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/get/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App