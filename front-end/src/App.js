import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Log-in";
import Signup from "./components/Sign-up";
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route element={<Home/>} path="Home" />
      <Route element={<Login/>} path="Log-in" />
      <Route element={<Signup/>} path="Sign-up" />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
