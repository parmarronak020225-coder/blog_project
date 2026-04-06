import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import Home from "./pages/Home";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />   {/* ✅ Home page */}


        <Route path="/add" element={<BlogForm />} />
        <Route path="/list" element={<BlogList />} />
        <Route path="/edit/:blogId" element={<BlogForm />} />

    </Routes>
    <Footer/>
    </BrowserRouter >
  );
}

export default App;