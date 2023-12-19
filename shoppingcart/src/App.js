import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Reg from './reg';
import Dashboard from './Dashboard';
import Header from './header';
import { Contextapi } from './Contextapi';
import { useEffect, useState } from 'react';
import Adminproduct from './adminproduct';
import Productadd from './productadd';
import Productupdate from './productupdate';
import Productdelete from './productdelete';
import Usersmanag from './usersmanagement';
import Usersfetch from './usersfetch';
import Usersproduct from './usersproduct';
import Cart from './cart';
import './index.css';
import Cartdelete from './cartdelete';

function App() {

  const [loginname, setloginname] = useState(localStorage.getItem('loginname'))
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
  const [cart, setCart] = useState('')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <>

      <Router>
        <Contextapi.Provider value={{ loginname, setloginname, cart, setCart }}>
          <Header />
          <Routes>
            {loginname ?
          <>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/adminproducts' element={<Adminproduct />}></Route>
            <Route path='/adminproductadd' element={<Productadd />}></Route>
            <Route path='/productupdate/:id' element={<Productupdate />}></Route>
            <Route path='/productdelete/:id' element={<Productdelete />}></Route>
            <Route path='/usermanagment' element={<Usersmanag />}></Route>
            <Route path='/userupdate/:id' element={<Usersfetch />}></Route>
            <Route path='/userproduct' element={<Usersproduct />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/delete/:id' element={<Cartdelete />}></Route>
            
            </>
            :
            <>
            <Route path='/' element={<Login />}></Route>
            <Route path='/reg' element={<Reg />}></Route>
            </>
            }
            {/* <Footer /> */}
          </Routes>
        </Contextapi.Provider>
      </Router>

    </>
  );
}

export default App;