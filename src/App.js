import './App.css';
import { useEffect } from 'react'
import { BrowserRouter  as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'
import Login from './components/user/Login'
import Register from './components/user/Register'
import { loadUser } from './actions/userActions'
import store from './store'
import Profile from './components/user/Profile'
import ProtectedRoute from './components/route/ProtectedRoute'
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword'



function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <>
        <Header/>
        <div className="container container-fluid">
            <Route path = "/" component={Home} exact/>
            <Route path='/search/:keyword' component={Home}/>
            <Route path = "/product/:id" component={ProductDetails} exact/>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <ProtectedRoute path='/me' component={Profile} exact/>
            <ProtectedRoute path='/me/update' component={UpdateProfile} exact/>
            <ProtectedRoute path='/password/update' component={UpdatePassword} exact/>
           
        </div>
       
        <Footer/>
      </>
    </Router>
  );
}

export default App;
