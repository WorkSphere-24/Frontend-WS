import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/getstarted" element={<GetStarted/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
