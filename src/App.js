import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/todo' element={<ListPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
