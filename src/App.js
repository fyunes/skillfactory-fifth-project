import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { app } from "./firebase/index"
import { UserDataProvider } from "./context/userData"


function App() {
  return (
    <div className="App">
      <UserDataProvider>
      <NavBar/>      
      <Routes>
         <Route path="/login" element={<Login />}/>
         <Route path="/register" element={<Register />}/>         
      </Routes>
      </UserDataProvider>      
    </div>
  );
}

export default App;
