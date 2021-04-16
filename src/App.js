
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts"
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import Shop from "./components/Shop/Shop";
import Jackets from "./components/Jackets/Jackets"
import Products from './components/Products/Products';
import Pants from './components/Pants/Pants';
import "./App.css"

function App() {
  const activeLinkStyle = {
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <ul className="ul">
        <li>
          <NavLink
          exact
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/"
            >home </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/contacts">contacts </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/about">about </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/posts">Posts </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/shop">shop </NavLink>
        </li>
      
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/jackets">jackets </NavLink>
        </li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/products">Prodocts</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/pants">Pants</NavLink></li>

      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        
        <Route path="/jackets" component={Jackets} />
        
        <Route path="/posts" component={Posts} />
        <Route path="/shop" component={Shop} />
        <Route path="/products" component={Products} />
        
        <Route path="/pants" component={Pants} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
        
        {/* <Redirect to="/"  />  */}
      </Switch>
    </div>
  );
}
export default App;
//brouzer router use 
//exact delaet atribut obizatelnym
//Switch pereclushaet 
//redirect to for home page pereadresasiya
//Link style stily aktivnoi ssylki
//navlink dlya navigasii
//match  coderzit params    url path isexact params
//path put
//put v komponente route
//exact dopuskeat tochnoe sovpadenie
