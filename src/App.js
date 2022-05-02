
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header/Header';
import Home from './Pages/Main/Home/Home/Home';
import Order from './Pages/Main/Order/Order';
import Login from './Pages/Main/Login/Login/Login';
import RequireAuth from './Pages/Main/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Main/Login/SignUp/SignUp';
import Orders from './Pages/Main/Orders/Orders';
import ProductDetails from './Pages/Main/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/productDetails/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/orders/:productId' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
