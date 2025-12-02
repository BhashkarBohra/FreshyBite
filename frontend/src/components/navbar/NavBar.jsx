import './NavBar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
          <Link to='/' className={menu == "home" ? "active" : ""} onClick={() => { setMenu("home") }}>Home</Link>
          <a href='#footer' className={menu == "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</a>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        {token?<button onClick={()=>navigate('/myorders')}>Order</button>:<button>Order</button>}
        
        {!token ? <button onClick={() => { setShowLogin('true') }}>Sign In</button>
          : <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>

          </div>}

        <div className="navbar-cart-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
